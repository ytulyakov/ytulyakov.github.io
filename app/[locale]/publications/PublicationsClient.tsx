'use client'

import { Publication } from '@/app/interfaces/Publication'
import groupBy from '@/app/utils/groupBy'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'

export const metadata: Metadata = {
	title: 'Publications | YT'
}

export default function PublicationsClient() {
	const translation = useTranslations('Publications')
	const publications: Record<number, Publication[]> = groupBy(
		translation.raw('publications') as Publication[],
		p => p.year
	)
	const years = Object.keys(publications)
		.map(Number)
		.sort((a, b) => b - a)

	return (
		<div className='w-[90%] sm:w-[70%] mx-auto py-10'>
			<div className='text-4xl font-bold'>{translation('value')}</div>

			{years.map(year => (
				<div key={`Publications_${year}`} className='pt-10'>
					<div className='mb-3'>
						<h2 className='text-2xl font-semibold inline-block text-right border-t-2 border-gray-300 pt-2 w-full text-gray-300'>
							{year}
						</h2>
					</div>
					<div className='space-y-10'>
						{publications[year].map(pub => (
							<div key={pub.title}>
								<div className='sm:flex space-y-5 sm:space-x-5'>
									<div className='sm:w-1/5'>
										<Image
											src={pub.imagePath}
											alt={pub.imageAlt}
											width={256}
											height={256}
											className='w-full h-auto'
										/>
									</div>
									<div className='sm:w-4/5'>
										<div className='sm:w-8/10'>{pub.title}</div>
										<div className='text-gray-500'>{pub.author}</div>
										<div className='text-gray-500 flex'>{pub.year}</div>
										<div className='pt-2'>
											<Link href={pub.url} target='blank'>
												<div className='inline-flex items-center justify-center w-10 h-7 bg-white border border-black rounded-full'>
													<BiLinkExternal className='text-xl text-black' />
												</div>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
