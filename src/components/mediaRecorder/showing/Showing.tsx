import React from 'react'
import styles from './Showing.module.scss'
import Video from 'ui/video/Video'
import { Button } from 'ui-hypefans-lib'
import ShowingActions from './showingActions/ShowingActions'

interface IShowing {
	selectedFile: File | null
	recordedChunks: Blob[]
	setIsShowMedia: React.Dispatch<React.SetStateAction<boolean>>
	setRecordedChunks: React.Dispatch<React.SetStateAction<Blob[]>>
	setSelectedFile: React.Dispatch<React.SetStateAction<File>>
}

const Showing = ({
	recordedChunks,
	selectedFile,
	setIsShowMedia,
	setRecordedChunks,
	setSelectedFile,
}: IShowing) => {
	console.log(selectedFile)
	if (!recordedChunks.length && !selectedFile) return null
	return (
		<div className={styles.wrapper}>
			<div className={styles.actions}>
				<ShowingActions
					setSelectedFile={setSelectedFile}
					recordedChunks={recordedChunks}
					setIsShowMedia={setIsShowMedia}
					setRecordedChunks={setRecordedChunks}
					selectedFile={selectedFile}
				></ShowingActions>
			</div>
			<div className={styles.media}>
				{selectedFile ? (
					<>
						{selectedFile.type.includes('video') ? (
							<Video src={URL.createObjectURL(selectedFile)} controls></Video>
						) : (
							<img
								className={styles.image}
								src={URL.createObjectURL(selectedFile)}
								alt='Selected'
							/>
						)}
					</>
				) : (
					<Video
						src={URL.createObjectURL(recordedChunks[0])}
						autoPlay
						loop
					></Video>
				)}
			</div>
			<div className={styles.buttons}>
				<Button>Опубликовать</Button>
			</div>
		</div>
	)
}

export default Showing
