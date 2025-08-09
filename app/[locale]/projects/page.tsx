import ProjectCard from '@/app/components/Project'
import { Project } from '@/app/interfaces/Project'
import groupBy from '@/app/utils/groupBy'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
	title: 'Projects | YT'
}

export default function Projects() {
	const translation = useTranslations('Projects')
	const projects = groupBy(
		translation.raw('projects') as Project[],
		p => p.year
	)
	const years = Object.keys(projects)
		.map(Number)
		.sort((a, b) => b - a)

	return (
		<div className='w-[90%] sm:w-[70%] mx-auto pt-10 pb-20'>
			<div className='text-4xl font-bold'>{translation('value')}</div>

			{years.map(year => (
				<section key={year} className='pt-10'>
					<h2 className='text-2xl font-semibold inline-block text-right border-t-2 border-gray-300 pt-2 w-full text-gray-300'>
						{year}
					</h2>

					<div className='pt-10 sm:pt-0 space-y-10'>
						{projects[year].map(project => (
							<ProjectCard key={`${year} ${project.info}`} project={project} />
						))}
					</div>
				</section>
			))}
		</div>
	)
}
