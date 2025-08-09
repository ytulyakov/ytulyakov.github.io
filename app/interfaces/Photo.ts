interface Photo {
	imagePath: string
	imageAlt: string
}

export interface Event {
	event: string
	photos: Photo[]
}
