/** @type {import('next').NextConfig} */

/**
 * CORREÇÃO 1: Configurações perigosas de build
 * PROBLEMA: ignoreDuringBuilds e ignoreBuildErrors mascaram bugs críticos
 * SOLUÇÃO SUGERIDA: Remover essas configurações e corrigir erros encontrados
 * BENEFÍCIO: Detecção precoce de bugs, melhor qualidade de código
 * 
 * // Código corrigido sugerido:
 * // const nextConfig = {
 * //   // eslint: { ignoreDuringBuilds: true }, // REMOVER
 * //   // typescript: { ignoreBuildErrors: true }, // REMOVER
 * // }
 */

/**
 * CORREÇÃO 5: Otimização de imagens desabilitada
 * PROBLEMA: unoptimized: true impacta performance em 60-80%
 * SOLUÇÃO SUGERIDA: Habilitar otimização nativa do Next.js
 * BENEFÍCIO: Carregamento mais rápido, melhor Core Web Vitals
 * 
 * // Código corrigido sugerido:
 * // images: {
 * //   formats: ['image/webp', 'image/avif'],
 * //   deviceSizes: [640, 750, 828, 1080, 1200, 1920],
 * //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
 * //   dangerouslyAllowSVG: true,
 * //   contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
 * // },
 */

/**
 * CORREÇÃO 17: Bundle size não otimizado
 * PROBLEMA: Falta otimização de imports e compressão
 * SOLUÇÃO SUGERIDA: Adicionar otimizações de bundle
 * BENEFÍCIO: Redução de 30-50% no tamanho do bundle
 * 
 * // Código sugerido para adicionar:
 * // experimental: {
 * //   optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
 * // },
 * // compress: true,
 * // poweredByHeader: false,
 */

/**
 * CORREÇÃO 9: Headers de segurança ausentes
 * PROBLEMA: Sem proteção contra XSS, clickjacking, etc.
 * SOLUÇÃO SUGERIDA: Implementar headers de segurança
 * BENEFÍCIO: Proteção contra ataques comuns
 * 
 * // Código sugerido para adicionar:
 * // async headers() {
 * //   return [
 * //     {
 * //       source: '/(.*)',
 * //       headers: [
 * //         { key: 'X-Frame-Options', value: 'DENY' },
 * //         { key: 'X-Content-Type-Options', value: 'nosniff' },
 * //         { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
 * //         { key: 'X-XSS-Protection', value: '1; mode=block' }
 * //       ]
 * //     }
 * //   ]
 * // }
 */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
