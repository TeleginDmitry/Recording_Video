import React, { useState } from 'react'
import styles from './MediaRecorder.module.scss'
import Showing from './showing/Showing'
import Recording from './recording/Recording'

const MediaRecorder = () => {
	const [isShowMedia, setIsShowMedia] = useState(false)
	const [recordedChunks, setRecordedChunks] = useState<Blob[]>([])
	const [selectedFile, setSelectedFile] = useState<File | null>(null)


	return (
		<div className={styles.wrapper}>
			{isShowMedia ? (
				<Showing
					selectedFile={selectedFile}
					recordedChunks={recordedChunks}
					setIsShowMedia={setIsShowMedia}
					setRecordedChunks={setRecordedChunks}
					setSelectedFile={setSelectedFile}
				></Showing>
			) : (
				<Recording
					setIsShowMedia={setIsShowMedia}
					setRecordedChunks={setRecordedChunks}
					setSelectedFile={setSelectedFile}
				></Recording>
			)}
		</div>
	)
}

export default MediaRecorder
