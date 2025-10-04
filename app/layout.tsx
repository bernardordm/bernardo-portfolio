import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { VT323 } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

/**
 * CORREÇÃO 2: Metadata completo para SEO
 * PROBLEMA: Ausência de metadata prejudica SEO e compartilhamento drasticamente
 * SOLUÇÃO SUGERIDA: Implementar metadata completo com Open Graph e Twitter Cards
 * BENEFÍCIO: Melhor indexação (até 300% mais visibilidade) e previews profissionais
 * 
 * // Código sugerido para adicionar:
 * // import type { Metadata } from 'next'
 * // 
 * // export const metadata: Metadata = {
 * //   title: {
 * //     default: 'Bernardo de Resende | Desenvolvedor Fullstack',
 * //     template: '%s | Bernardo de Resende'
 * //   },
 * //   description: 'Desenvolvedor Fullstack especializado em React, Next.js, Node.js e Java.',
 * //   keywords: ['desenvolvedor fullstack', 'react', 'nextjs', 'nodejs', 'java', 'typescript'],
 * //   authors: [{ name: 'Bernardo de Resende', url: 'https://github.com/bernardordm' }],
 * //   metadataBase: new URL('https://bernardordm.vercel.app'),
 * //   openGraph: {
 * //     type: 'website',
 * //     locale: 'pt_BR',
 * //     url: '/',
 * //     title: 'Bernardo de Resende | Desenvolvedor Fullstack',
 * //     description: 'Portfolio de desenvolvedor fullstack especializado em tecnologias modernas.',
 * //     siteName: 'Bernardo de Resende Portfolio',
 * //     images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
 * //   },
 * //   twitter: {
 * //     card: 'summary_large_image',
 * //     title: 'Bernardo de Resende | Desenvolvedor Fullstack',
 * //     description: 'Portfolio de desenvolvedor fullstack',
 * //     images: ['/og-image.jpg'],
 * //   },
 * //   robots: { index: true, follow: true },
 * // }
 */


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
      {/**
       * CORREÇÃO: Estrutura HTML e classes CSS melhoradas
       * PROBLEMA: Body sem classes básicas, falta viewport meta e estrutura semântica
       * SOLUÇÃO SUGERIDA: Adicionar classes CSS fundamentais e meta tags
       * BENEFÍCIO: Melhor experiência mobile, tipografia consistente
       * 
       * Código sugerido:
       * <head>
       *   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
       *   <meta name="theme-color" content="#0070f3" />
       *   <link rel="manifest" href="/manifest.json" />
       *   <link rel="icon" href="/favicon.ico" sizes="any" />
       *   <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
       *   <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
       * </head>
       * <body className="min-h-screen bg-background font-sans antialiased">
       */}
           <body>
        {children}
      </body>
    </html>
  )
}