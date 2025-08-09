import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { BiLogoInstagram, BiLogoTelegram, BiLogoTiktok } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'
import Slider from '../components/Slider'
import SliderWork from '../components/SliderWork'
import CountVisits from '../components/Visits'
import { SectionRaw } from '../interfaces/SectionRaw'
import { SliderItem, SliderItemWork } from '../interfaces/SliderItem'

export const metadata: Metadata = {
	title: 'Home | YT'
}

export default function Home() {
	const translation = useTranslations('Home')
	const sections = translation.raw('sections') as SectionRaw[]

	const education = translation.raw('education') as {
		value: string
		items: SliderItem[]
	}
	const educationItems = education.items

	const work = translation.raw('work') as {
		value: string
		items: SliderItemWork[]
	}
	const workItems = work.items

	return (
		<div>
			<div className='flex justify-end items-center pt-5 pr-5'>
				<div>{translation('numberVisits')}</div>
				<div className='pl-5'>
					<CountVisits />
				</div>
			</div>
			<div className='grid grid-cols-12 gap-4 lg:pt-7 lg:px-30'>
				<div className='col-span-12 lg:col-span-4'>
					<div className='px-10 py-6 md:px-0 sm:py-0 '>
						<div className='border-4 border-sky-500'>
							<Image
								src='/images/profile.jpeg'
								alt='Image Profile'
								width={1000}
								height={1000}
							/>
						</div>
					</div>

					<div className='text-center py-0 text-3xl sm:py-3'>
						{translation('name')} {translation('surname')}
					</div>
					<ul className='flex justify-center space-x-4 py-3 sm:py-0'>
						<li>
							<Link href='mailto:2024robotics@gmail.com'>
								<MdOutlineEmail
									style={{ color: '#1864c4' }}
									className='text-5xl hover:scale-120 duration-225'
								/>
							</Link>
						</li>
						<li className=''>
							<Link
								href='https://www.instagram.com/yaroslav.tulyakov/'
								target='_blank'
							>
								<BiLogoInstagram
									style={{ color: '#ee037f' }}
									className='text-5xl hover:scale-120 duration-225'
								/>
							</Link>
						</li>
						<li className=''>
							<Link
								href='https://www.tiktok.com/@yaroslav.tulyakov'
								target='_blank'
							>
								<BiLogoTiktok
									style={{ color: '#000000' }}
									className='text-5xl hover:scale-120 duration-225'
								/>
							</Link>
						</li>
					</ul>
					<div className='grid grid-cols-5 pt-4 sm:pt-5'>
						<div className='col-span-1 flex justify-end'>
							<Link href='https://t.me/+9G2rgWzb2e82MmYy' target='_blank'>
								<BiLogoTelegram
									className='text-5xl hover:scale-120 duration-225'
									style={{ color: '#32b1ef' }}
								/>
							</Link>
						</div>
						<div className='col-span-4 pl-6'>{translation('telegram')}</div>
					</div>
				</div>
				<div className='col-span-12 lg:col-span-8 px-6 sm:px-10'>
					<div className='text-left text-5xl'>{translation('hello')}</div>
					<div className='text-left text-2xl font-bold py-3'>
						{translation('mission')}
					</div>
					<ul>
						{sections.map(section => (
							<li key={section.name} className='py-3'>
								<div className='text-3xl'>{section.name}</div>
								{section.value && (
									<div className='py-1 text-xl'>{section.value}</div>
								)}
								{section.values && (
									<ul>
										{section.values.map(value => (
											<li key={value} className='text-xl'>
												{value}
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='py-10'>
				<div className='text-center text-4xl font-bold'>{education.value}</div>
				<Slider items={educationItems} />
			</div>
			<div className='py-10'>
				<div className='text-center text-4xl font-bold'>{work.value}</div>
				<SliderWork items={workItems} />
			</div>
		</div>
	)
}
