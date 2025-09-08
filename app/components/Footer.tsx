const Footer = () => {
	return (
		<footer className='fixed bottom-0 left-0 w-full bg-[#1c1c1d]'>
			<div className='max-w-screen-xl mx-auto h-8 flex items-center justify-center'>
				<span className='text-white text-xs'>
					© Copyright {new Date().getFullYear()} Yaroslav Tulyakov
				</span>
			</div>
		</footer>
	)
}

export default Footer
