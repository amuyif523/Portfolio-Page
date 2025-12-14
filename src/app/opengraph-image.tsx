import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Amanuel | Creative Technologist'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #27272A',
            borderRadius: '20px',
            padding: '40px 80px',
            background: '#0a0a0a',
          }}
        >
          <h1
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: '#ededed',
              margin: 0,
              marginBottom: 20,
              textTransform: 'uppercase',
              letterSpacing: '-0.05em',
            }}
          >
            Amanuel
          </h1>
          <div
            style={{
              fontSize: 32,
              color: '#E2FD46', // Acid Lime
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: 'monospace',
            }}
          >
            Creative Technologist
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
