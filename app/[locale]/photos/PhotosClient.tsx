'use client'

import { Event } from '@/app/interfaces/Photo'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const PhotosClient = () => {
	const translation = useTranslations('Photos')
	const events = translation.raw('events') as Event[]

	return (
		<div className='w-[90%] sm:w-[70%] mx-auto pt-10 pb-20'>
			<div className='text-4xl font-bold'>{translation('value')}</div>

			<div className='sm:space-y-10'>
				{events.map(e => (
					<div key={`Event ${e.event}`} className='pt-10'>
						<div className='text-xl sm:text-2xl'>{e.event}</div>
						<div className='columns-1 sm:columns-2 lg:columns-3 pt-6 gap-4'>
							{e.photos.map(photo => (
								<div className='mb-4 break-inside-avoid' key={photo.imagePath}>
									<Image
										src={photo.imagePath}
										alt={photo.imageAlt}
										width={300}
										height={100}
										className='w-full object-cver rounded-lg'
									/>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default PhotosClient
