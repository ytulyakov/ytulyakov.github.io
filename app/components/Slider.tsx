import Image from 'next/image'
import { Fragment } from 'react'
import { SliderItem } from '../interfaces/SliderItem'

const NUMBER_OF_POINTS = 6

const Slider = ({ items }: { items: SliderItem[] }) => (
	<div className='container mx-auto px-4'>
		<div className='flex items-center overflow-x-auto mt-4 pt-2 pb-4'>
			{items.map((item, index) => (
				<Fragment key={item.place + item.skill + item.year}>
					<div className='flex-shrink-0 flex flex-col items-center m-4'>
						<div className='w-16 h-16 rounded-full flex items-center justify-center'>
							<Image
								src={item.imagePath}
								alt={item.imageAlt}
								width={40}
								height={40}
								className='fa-img rounded-full'
							/>
						</div>
						<p className='mt-3 mb-1 text-lg font-semibold'>{item.year}</p>
						<p className='text-gray-500 mb-1 text-base max-w-xs text-center'>
							{item.skill}
						</p>
						<p className='text-gray-500 text-base text-center max-w-xs'>
							{item.place}
						</p>
					</div>

					{index < items.length - 1 && (
						<div>
							<div className='flex-shrink-0 flex items-center mx-2'>
								{Array.from({ length: NUMBER_OF_POINTS }, (_, indexPoint) => (
									<div key={indexPoint}>
										<div className='w-2 h-2 bg-blue-500 rounded-full mx-1' />
									</div>
								))}
							</div>
						</div>
					)}
				</Fragment>
			))}
		</div>
	</div>
)

export default Slider
