import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['@repo/ui', '@repo/utils'],
  output: 'standalone', // Docker 환경 필수 설정
}

export default nextConfig
