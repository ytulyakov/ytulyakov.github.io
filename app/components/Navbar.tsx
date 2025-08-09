// 'use client'

// import { useTranslations } from 'next-intl'
// import Link from 'next/link'
// import { usePathname, useRouter } from 'next/navigation'
// import { ChangeEvent, useState } from 'react'

// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
// import { BiLogoInstagram, BiLogoTelegram, BiLogoTiktok } from 'react-icons/bi'
// import { MdOutlineEmail } from 'react-icons/md'
// import { PAGES } from '../config/pages'

// const Navbar = ({ locale }: { locale: string }) => {
// 	const [isMenuOpen, setMenuOpen] = useState(false)
// 	const translation = useTranslations('NavbarLinks')
// 	const pathName = usePathname()
// 	const router = useRouter()

// 	const links = [
// 		{ href: PAGES.HOME(locale), label: translation('home') },
// 		{ href: PAGES.PUBLICATIONS(locale), label: translation('publications') },
// 		{ href: PAGES.PROJECTS(locale), label: translation('projects') },
// 		{ href: PAGES.PHOTOS(locale), label: translation('photos') }
// 	]

// 	const handleNav = () => {
// 		setMenuOpen(!isMenuOpen)
// 	}

// 	const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
// 		const newLocale = e.target.value
// 		const path = pathName.split('/').slice(2).join('/')
// 		router.push(`/${newLocale}/${path}`)
// 	}

// 	return (
// 		<nav className='fixed top-0 left-0 right-0 z-50 w-full h-17 shadow-md bg-white'>
// 			<div className='flex justify-between items-center h-full w-full px-20 2xl:px-50'>
// 				<Link href={PAGES.HOME(locale)}>
// 					<div className='font-bold text-base sm:text-xl flex'>
// 						<span>{translation('name')}</span>
// 						<span className='ml-1'>{translation('surname')}</span>
// 					</div>
// 				</Link>

// 				<ul className='hidden sm:flex'>
// 					{links.map(link => {
// 						const isActive = pathName === link.href
// 						return (
// 							<Link href={link.href} key={link.href}>
// 								<li
// 									className={`ml-10 hover:border-b ${
// 										isActive && 'text-blue-700'
// 									}`}
// 								>
// 									{link.label}
// 								</li>
// 							</Link>
// 						)
// 					})}

// 					<select
// 						value={locale}
// 						onChange={handleLanguageChange}
// 						className='ml-10'
// 					>
// 						<option value='ru'>RU</option>
// 						<option value='en'>EN</option>
// 					</select>
// 				</ul>

// 				<div onClick={handleNav} className='sm:hidden cursor-pointer'>
// 					<AiOutlineMenu size={25} />
// 				</div>
// 			</div>
// 			<div
// 				className={
// 					isMenuOpen
// 						? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
// 						: 'fixed left-[-100%] top-0 p-10 h-screen ease-out duration-500'
// 				}
// 			>
// 				<div className='flex w-full items-center justify-end'>
// 					<div onClick={handleNav} className='cursor-pointer'>
// 						<AiOutlineClose size={25} />
// 					</div>
// 				</div>
// 				<div className='flex-col py-4'>
// 					<ul>
// 						{links.map(link => {
// 							const isActive = pathName === link.href
// 							return (
// 								<Link href={link.href} key={`Mobile_${link.href}`}>
// 									<li
// 										onClick={() => setMenuOpen(false)}
// 										className={`cursor-pointer py-4 ${
// 											isActive && 'text-blue-700'
// 										}`}
// 									>
// 										{link.label}
// 									</li>
// 								</Link>
// 							)
// 						})}
// 						<ul className='flex space-x-3 pt-5'>
// 							<li>
// 								<Link href='mailto:2024robotics@gmail.com'>
// 									<MdOutlineEmail
// 										style={{ color: '#1864c4' }}
// 										className='text-5xl hover:scale-120 duration-225'
// 									/>
// 								</Link>
// 							</li>
// 							<li className=''>
// 								<Link
// 									href='https://www.instagram.com/yaroslav.tulyakov/'
// 									target='_blank'
// 								>
// 									<BiLogoInstagram
// 										style={{ color: '#ee037f' }}
// 										className='text-5xl hover:scale-120 duration-225'
// 									/>
// 								</Link>
// 							</li>
// 							<li className=''>
// 								<Link
// 									href='https://www.tiktok.com/@yaroslav.tulyakov'
// 									target='_blank'
// 								>
// 									<BiLogoTiktok
// 										style={{ color: '#000000' }}
// 										className='text-5xl hover:scale-120 duration-225'
// 									/>
// 								</Link>
// 							</li>
// 						</ul>
// 						<div className='grid grid-cols-5 pt-4 sm:pt-5'>
// 							<div className='col-span-1 flex justify-end m-auto'>
// 								<Link href='https://t.me/+9G2rgWzb2e82MmYy' target='_blank'>
// 									<BiLogoTelegram
// 										className='text-5xl hover:scale-120 duration-225'
// 										style={{ color: '#32b1ef' }}
// 									/>
// 								</Link>
// 							</div>
// 							<div
// 								className={`col-span-4 pl-6 ${
// 									isMenuOpen ? 'inline' : 'hidden'
// 								}`}
// 							>
// 								{translation('telegram')}
// 							</div>
// 						</div>
// 						<div className='pt-4'>{translation('telegramSubscribeCall')}</div>
// 					</ul>
// 				</div>
// 			</div>
// 		</nav>
// 	)
// }

// export default Navbar

'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { useTranslations } from 'next-intl'

import { ChangeEvent, useState } from 'react'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BiLogoInstagram, BiLogoTelegram, BiLogoTiktok } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'
import { PAGES } from '../config/pages'

const Navbar = ({ locale }: { locale: string }) => {
	const [isMenuOpen, setMenuOpen] = useState(false)
	const t = useTranslations('NavbarLinks')
	const pathName = usePathname()
	const router = useRouter()

	const links = [
		{ href: PAGES.HOME(locale), label: t('home') },
		{ href: PAGES.PUBLICATIONS(locale), label: t('publications') },
		{ href: PAGES.PROJECTS(locale), label: t('projects') },
		{ href: PAGES.PHOTOS(locale), label: t('photos') }
	]

	const handleNav = () => setMenuOpen(prev => !prev)

	const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const newLocale = e.target.value

		const rest = pathName.split('/').slice(2).join('/')
		router.push(`/${newLocale}/${rest}`)
	}

	return (
		<nav className='fixed top-0 left-0 right-0 z-50 w-full h-17 shadow-md bg-white'>
			<div className='flex items-center h-full w-full px-4 sm:px-20 justify-start sm:justify-between'>
				<div
					onClick={handleNav}
					className='block sm:hidden cursor-pointer pl-3'
				>
					<AiOutlineMenu size={25} />
				</div>

				<Link href={PAGES.HOME(locale)} className='mx-auto sm:mx-0'>
					<div className='font-bold text-base sm:text-xl flex'>
						<span>{t('name')}</span>
						<span className='ml-1'>{t('surname')}</span>
					</div>
				</Link>

				<select
					value={locale}
					onChange={handleLanguageChange}
					className='block sm:hidden ml-auto mr-3'
				>
					<option value='ru'>RU</option>
					<option value='en'>EN</option>
				</select>

				<ul className='hidden sm:flex items-center'>
					{links.map(link => {
						const isActive = pathName === link.href
						return (
							<Link href={link.href} key={link.href}>
								<li
									className={`ml-10 hover:border-b ${
										isActive ? 'text-blue-700' : ''
									}`}
								>
									{link.label}
								</li>
							</Link>
						)
					})}

					<select
						value={locale}
						onChange={handleLanguageChange}
						className='ml-10'
					>
						<option value='ru'>RU</option>
						<option value='en'>EN</option>
					</select>
				</ul>
			</div>

			<div
				className={
					isMenuOpen
						? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
						: 'fixed left-[-100%] top-0 p-10 h-screen ease-out duration-500'
				}
			>
				<div className='flex w-full items-center justify-end'>
					<div onClick={handleNav} className='cursor-pointer'>
						<AiOutlineClose size={25} />
					</div>
				</div>
				<div className='flex-col py-4'>
					<ul>
						{links.map(link => {
							const isActive = pathName === link.href
							return (
								<Link href={link.href} key={`mobile_${link.href}`}>
									<li
										onClick={() => setMenuOpen(false)}
										className={`cursor-pointer py-4 ${
											isActive ? 'text-blue-700' : ''
										}`}
									>
										{link.label}
									</li>
								</Link>
							)
						})}

						<ul className='flex space-x-3 pt-5'>
							<li>
								<Link href='mailto:2024robotics@gmail.com'>
									<MdOutlineEmail
										style={{ color: '#1864c4' }}
										className='text-5xl hover:scale-120 duration-225'
									/>
								</Link>
							</li>
							<li>
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
							<li>
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
							<div className='col-span-1 flex justify-end m-auto'>
								<Link href='https://t.me/+9G2rgWzb2e82MmYy' target='_blank'>
									<BiLogoTelegram
										className='text-5xl hover:scale-120 duration-225'
										style={{ color: '#32b1ef' }}
									/>
								</Link>
							</div>
							<div
								className={`col-span-4 pl-6 ${
									isMenuOpen ? 'inline' : 'hidden'
								}`}
							>
								{t('telegram')}
							</div>
						</div>
						<div className='pt-4'>{t('telegramSubscribeCall')}</div>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
