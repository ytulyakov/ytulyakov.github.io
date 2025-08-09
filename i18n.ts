import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

const locales = ['ru', 'en']

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale

	if (!locale || !locales.includes(locale as any)) notFound()

	return {
		locale,
		messages: (await import(`./messages/${locale}.json`)).default
	}
})
