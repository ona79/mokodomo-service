"use client";

import { useEffect, useRef } from "react";

const TOTAL_FRAMES = 180;
const BATCH_SIZE = 20;

function getFramePath(index: number) {
  const frameNum = String(index + 1).padStart(3, "0");
  return `/video_front/ezgif-frame-${frameNum}.jpg`;
}

export default function CanvasScrollBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const currentFrameRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isMounted = true;

    // Direct render helper
    const render = () => {
      rafIdRef.current = null;
      if (!canvas || !ctx) return;

      const targetIndex = currentFrameRef.current;
      let img = imagesRef.current[targetIndex];

      // Fallback to nearest loaded frame if current target frame isn't loaded yet
      if (!img) {
        let step = 1;
        while (step < TOTAL_FRAMES) {
          if (targetIndex - step >= 0 && imagesRef.current[targetIndex - step]) {
            img = imagesRef.current[targetIndex - step];
            break;
          }
          if (targetIndex + step < TOTAL_FRAMES && imagesRef.current[targetIndex + step]) {
            img = imagesRef.current[targetIndex + step];
            break;
          }
          step++;
        }
      }

      if (!img) return;

      const dpr = window.devicePixelRatio || 1;
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      // Cover scaling math
      const imgWidth = img.naturalWidth || img.width;
      const imgHeight = img.naturalHeight || img.height;
      if (imgWidth > 0 && imgHeight > 0) {
        const scale = Math.max(displayWidth / imgWidth, displayHeight / imgHeight);
        const drawW = imgWidth * scale;
        const drawH = imgHeight * scale;
        const offsetX = (displayWidth - drawW) / 2;
        const offsetY = (displayHeight - drawH) / 2;
        ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
      }
      ctx.restore();
    };

    const requestRender = () => {
      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(render);
      }
    };

    // Load an individual frame
    const loadImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        if (imagesRef.current[index]) {
          resolve(imagesRef.current[index]!);
          return;
        }
        const img = new Image();
        img.src = getFramePath(index);
        img.onload = () => {
          if (isMounted) {
            imagesRef.current[index] = img;
            // If this is the active frame index, render immediately
            if (index === currentFrameRef.current) {
              requestRender();
            }
          }
          resolve(img);
        };
        img.onerror = () => resolve(img); // Continue on error without throwing batch error
      });
    };

    // Load initial critical frames (first 20)
    const loadFrames = async () => {
      const initialPromises: Promise<HTMLImageElement>[] = [];
      for (let i = 0; i < Math.min(BATCH_SIZE, TOTAL_FRAMES); i++) {
        initialPromises.push(loadImage(i));
      }
      await Promise.allSettled(initialPromises);
      if (!isMounted) return;
      requestRender();

      // Load remaining frames in batches
      for (let i = BATCH_SIZE; i < TOTAL_FRAMES; i += BATCH_SIZE) {
        if (!isMounted) break;
        const batchPromises: Promise<HTMLImageElement>[] = [];
        for (let j = i; j < Math.min(i + BATCH_SIZE, TOTAL_FRAMES); j++) {
          batchPromises.push(loadImage(j));
        }
        await Promise.allSettled(batchPromises);
        // Small pause between batches
        await new Promise((r) => setTimeout(r, 60));
      }
    };

    loadFrames();

    // Calculate scroll progress across whole document
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
      ) - window.innerHeight;

      if (docHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, scrollTop / docHeight));
      const newFrameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES));

      if (newFrameIndex !== currentFrameRef.current) {
        currentFrameRef.current = newFrameIndex;
        requestRender();
      }
    };

    const onScroll = () => {
      updateScrollProgress();
    };

    const onResize = () => {
      updateScrollProgress();
      requestRender();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    const resizeObserver = new ResizeObserver(() => {
      updateScrollProgress();
    });
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    updateScrollProgress();
    requestRender();

    return () => {
      isMounted = false;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      resizeObserver.disconnect();
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Light subtle overlay to enhance contrast without obscuring the background video */}
      <div className="absolute inset-0 bg-[#0B1020]/15 pointer-events-none" />
    </div>
  );
}
