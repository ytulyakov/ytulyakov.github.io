import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import { Geist } from 'next/font/google'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../globals.css'

export const dynamic = 'force-static'
export function generateStaticParams() {
	return [{ locale: 'ru' }, { locale: 'en' }]
}

const geistSans = Geist({
	subsets: ['latin'],
	variable: '--font-geist-sans',
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Yaroslav Tulyakov',
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/favicon_apple.png'
	}
}

export default async function RootLayout({
	children,
	params
}: {
	children: React.ReactNode
	params: {
		locale: string
	}
}) {
	const { locale } = params
	unstable_setRequestLocale(locale)

	const messages = await getMessages({ locale })
	return (
		<html lang={locale}>
			<body className={`${geistSans.className}`}>
				<NextIntlClientProvider messages={messages}>
					<Navbar locale={locale} />
					<main className='pt-16'>{children}</main>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
