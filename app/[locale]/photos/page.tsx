import { Metadata } from 'next'
import PhotosClient from './PhotosClient'

export const metadata: Metadata = {
	title: 'Photos | YT'
}

const Photos = () => {
	return <PhotosClient />
}

export default Photos
