import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Max HP Productions — Production + Post';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0A',
          padding: '60px',
        }}
      >
        {/* MAX HP PRODUCTIONS - text-based logo */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '40px',
            gap: '4px',
          }}
        >
          <span
            style={{
              fontSize: '120px',
              fontWeight: 900,
              color: '#FAFAFA',
              letterSpacing: '0.04em',
              lineHeight: 1,
              fontFamily: 'Inter',
            }}
          >
            MAX HP
          </span>
          <span
            style={{
              fontSize: '52px',
              fontWeight: 700,
              color: '#FAFAFA',
              letterSpacing: '0.12em',
              lineHeight: 1,
              fontFamily: 'Inter',
            }}
          >
            PRODUCTIONS
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: '30px',
            fontWeight: 300,
            color: '#A0A0A0',
            textAlign: 'center',
            margin: 0,
            fontFamily: 'Inter',
          }}
        >
          Premium production & post-production — NYC.
        </p>
      </div>
    ),
    {
      ...size,
    },
  );
}
