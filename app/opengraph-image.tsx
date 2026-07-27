import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mokodomo Tech — Construisons votre avenir numérique";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(60% 45% at 15% 0%, rgba(37,99,235,0.35), transparent 60%), radial-gradient(50% 40% at 90% 15%, rgba(6,182,212,0.25), transparent 60%), #0B1020",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              background: "linear-gradient(135deg, #2563EB, #06B6D4)",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 800, color: "#fff" }}>Mokodomo Tech</div>
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, color: "#fff", lineHeight: 1.1, maxWidth: 900 }}>
          Construisons votre avenir numérique.
        </div>
        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.6)", marginTop: 28, maxWidth: 800 }}>
          Sites web · Applications · Intelligence Artificielle · Vidéo · Formations
        </div>
      </div>
    ),
    { ...size }
  );
}
