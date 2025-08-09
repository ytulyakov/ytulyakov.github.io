import withFlowbiteReact from 'flowbite-react/plugin/nextjs'
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
	// Dev comment this two lines
	output: 'export',
	images: { unoptimized: true },
	trailingSlash: true
}

export default withFlowbiteReact(withNextIntl(nextConfig))
