import { Metadata } from 'next'
import PublicationsClient from './PublicationsClient'

export const metadata: Metadata = {
	title: 'Publications | YT'
}

export default function Publications() {
	return <PublicationsClient />
}
