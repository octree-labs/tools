import { ImageResponse } from 'next/og';

export const alt = 'Octree LaTeX Tools – free AI converters, templates and symbol references';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Default social preview for every page on tools.useoctree.com. Pages had
// og:image missing entirely, so shares on X/LinkedIn/Slack rendered bare.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: 'linear-gradient(135deg, #0b1220 0%, #10213f 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: '#478eff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            O
          </div>
          <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: -0.5 }}>Octree LaTeX Tools</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Free LaTeX tools, templates &amp; symbols
          </div>
          <div style={{ fontSize: 32, color: '#b7c6e4', lineHeight: 1.3 }}>
            AI converters, 70+ templates and a complete symbol reference. No signup.
          </div>
        </div>
        <div style={{ fontSize: 28, color: '#8fa6d1' }}>tools.useoctree.com</div>
      </div>
    ),
    { ...size }
  );
}
