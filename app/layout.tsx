import { Inter } from 'next/font/google'
import './globals.css'
import MouseGradient from '@/components/MouseGradient'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kurt Oswill McCarver',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="relative my-[25px] mx-[300px]">
        <MouseGradient />
        {children}
      </body>
    </html>
  )
}