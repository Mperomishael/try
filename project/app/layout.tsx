import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Redirect Page',
  description: 'Interactive redirect page with power button animation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}