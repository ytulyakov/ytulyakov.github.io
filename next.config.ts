import withFlowbiteReact from 'flowbite-react/plugin/nextjs'
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
	// Dev comment this lines
	output: 'export',
	images: { unoptimized: true },
	async redirects() {
		return [
			{
				source: '/',
				destination: '/ru/',
				permanent: true
			}
		]
	}
}

export default withFlowbiteReact(withNextIntl(nextConfig))
