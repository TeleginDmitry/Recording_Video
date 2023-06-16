import { useState } from 'react'

import styles from './VideoRecorder.module.scss'

import ShowVideo from './showVideo/ShowVideo'
import RecordingVideo from './recordingVideo/RecordingVideo'

const VideoRecorder = (): JSX.Element => {
	const [isShowVideo, setIsShowVideo] = useState<boolean>(false)
	const [recordedChunks, setRecordedChunks] = useState<Blob[]>([])

	return (
		<div className={styles.wrapper}>
			{isShowVideo ? (
				<ShowVideo src={recordedChunks}></ShowVideo>
			) : (
				<RecordingVideo
					setRecordedChunks={setRecordedChunks}
					setIsShowVideo={setIsShowVideo}
				></RecordingVideo>
			)}
		</div>
	)
}

export default VideoRecorder
