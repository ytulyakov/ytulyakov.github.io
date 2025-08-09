import Image from 'next/image'
import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Project } from '../interfaces/Project'

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<div className='sm:flex sm:items-stretch'>
			<div className='sm:w-2/10 sm:pr-4 flex flex-col m-auto'>
				<Image
					src={project.imagePath}
					alt={project.imageAlt}
					width={256}
					height={256}
					className='w-full h-auto'
				/>
			</div>
			<div className='pt-5 sm:pt-0 sm:w-8/10 sm:pl-4 flex flex-col'>
				<div className='sm:w-8/10'>
					{project.info.split('\n').map((line, index) => (
						<ReactMarkdown remarkPlugins={[remarkGfm]} key={index}>
							{line}
						</ReactMarkdown>
					))}
				</div>
				<div className='text-gray-500'>{project.author}</div>
				<div className='text-gray-500 flex'>{project.year}</div>
				<div className='flex space-x-3 mt-auto pt-2'>
					<Link href='mailto:2024robotics@gmail.com' target='_blank'>
						<div>
							<div className='inline-flex items-center justify-center w-10 h-7 bg-white border border-black rounded-full'>
								<MdOutlineEmail className='text-2xl ' />
							</div>
						</div>
					</Link>
					{project.url && (
						<Link href={project.url} target='_blank'>
							<div className='inline-flex items-center justify-center w-10 h-7 bg-white border border-black rounded-full'>
								<BiLinkExternal className='text-xl text-black' />
							</div>
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}
