import Script from 'next/script'

const CountVisits = () => {
	return (
		<div>
			<Script
				id='freevisitor-auth'
				src='https://www.freevisitorcounters.com/auth.php?id=8d55d0cf0f94882748af448f5432a691960c8013'
				strategy='afterInteractive'
			/>

			<Script
				id='freevisitor-counter'
				src='https://www.freevisitorcounters.com/en/home/counter/1204301/t/3'
				strategy='afterInteractive'
			/>
			<div className='border-1 border-black-400 rounded-sm'>
				<img
					src='https://www.freevisitorcounters.com/en/counter/render/1204301/t/3'
					className='counterimg'
					alt='Счётчик посещений'
				/>
			</div>
		</div>
	)
}

export default CountVisits
