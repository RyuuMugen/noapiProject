import LayOutWithSSR from '@/common/Layout'
import { OverLayProvider } from '@/useContext/OverLayContext'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { theme } from '../../theme'
import '@mantine/carousel/styles.css'
import './globals.css'
import Device from '@/useContext/DeviceContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BUILDPC.VN',
  description: 'Xây dựng cấu hình máy tính Shopee - Lazada',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript />
        <link
          rel="shortcut icon"
          href="https://down-cvs-vn.img.susercontent.com/vn-11134207-7r98o-lpani6onh9aza2.webp"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <div id="fb-root"></div>
      <script
        async
        defer
        // crossorigin="anonymous"
        src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v20.0"
        nonce="SmzYRpzU"
      ></script>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <Device>
            <OverLayProvider>
              <LayOutWithSSR>{children}</LayOutWithSSR>
            </OverLayProvider>
          </Device>
        </MantineProvider>
      </body>
    </html>
  )
}
