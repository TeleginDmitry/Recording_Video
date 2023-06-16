import React from 'react'
import styles from './ShowVideo.module.scss'
import Video from 'ui/video/Video'
import { Button } from 'ui-hypefans-lib'

interface IShowVideo {
	src: Blob[]
}

const ShowVideo = (props: IShowVideo) => {
	const { src } = props

	if (!src) return null

	const completedLink = URL.createObjectURL(src[0])

	return (
		<div className={styles.wrapper}>
			<div className={styles.video__container}>
				<Video src={completedLink}></Video>
			</div>

			<div className={styles.actions}>
				<Button>Опубликовать</Button>
			</div>
		</div>
	)
}

export default ShowVideo
