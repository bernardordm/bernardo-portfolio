import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { VT323 } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'


const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-vt323',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${GeistSans.variable} ${GeistMono.variable} ${vt323.variable} ${jetbrainsMono.variable}`}>
           <body>
        {children}
      </body>
    </html>
  )
}