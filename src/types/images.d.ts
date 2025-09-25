declare module '*.avif'
declare module '*.bmp'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.jfif'
declare module '*.pjpeg'
declare module '*.pjp'
declare module '*.png'
declare module '*.webp'
declare module '*.svg' {
	import * as React from 'react'
	export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>
	const src: string
	export default src
}

declare module '*.JPG'
declare module '*.JPEG'
declare module '*.PNG'
declare module '*.WEBP'
