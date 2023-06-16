import React from 'react'
import styles from './Video.module.scss'

interface IVideo
	extends React.DetailedHTMLProps<
		React.VideoHTMLAttributes<HTMLVideoElement>,
		HTMLVideoElement
	> {
	src: string
}

const Video = (props: IVideo) => {
	const { src, ...videoProps } = props

	if (!src) return null

	return (
		<video className={styles.video} autoPlay loop {...videoProps}>
			<source src={src} type='video/webm' />
		</video>
	)
}

export default Video
