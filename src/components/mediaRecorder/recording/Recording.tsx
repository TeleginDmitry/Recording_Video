import React, { useCallback, useRef, useState } from 'react'
import styles from './Recording.module.scss'
import Webcam from 'react-webcam'
import cn from 'utils/classNames/classNames'
import RecordingActions from './recordingActions/RecordingActions'

interface IRecording {
	setIsShowMedia: React.Dispatch<React.SetStateAction<boolean>>
	setRecordedChunks: React.Dispatch<React.SetStateAction<Blob[]>>
	setSelectedFile: React.Dispatch<React.SetStateAction<File>>
}

const Recording = ({
	setIsShowMedia,
	setRecordedChunks,
	setSelectedFile,
}: IRecording) => {
	const webcamRef = useRef<Webcam | null>(null)
	const mediaRecorderRef = useRef<MediaRecorder | null>(null)
	const [capturing, setCapturing] = useState(false)
	const [cameraMode, setCameraMode] = useState<'user' | 'environment'>('user')

	async function handleStartCapture() {
		setCapturing(true)
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				audio: true,
				video: { facingMode: cameraMode },
			})
			if (webcamRef.current && webcamRef.current.video) {
				webcamRef.current.video.srcObject = stream
				mediaRecorderRef.current = new MediaRecorder(stream, {
					mimeType: 'video/webm',
				})
				mediaRecorderRef.current.addEventListener(
					'dataavailable',
					handleDataAvailable
				)
				mediaRecorderRef.current.addEventListener('stop', () =>
					setIsShowMedia(true)
				)
				mediaRecorderRef.current.start()
			}
		} catch (error) {
			console.error('Error accessing camera:', error)
		}
	}

	const handleDataAvailable = useCallback(
		({ data }: BlobEvent) => {
			if (data.size > 0) {
				setRecordedChunks(prev => prev.concat(data))
			}
		},
		[setRecordedChunks]
	)

	const handleStopCapture = useCallback(() => {
		if (!mediaRecorderRef.current) return

		mediaRecorderRef.current.stop()
		setCapturing(false)
	}, [mediaRecorderRef, setCapturing])

	const onChangeCamera = () => {
		setCameraMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'))
	}

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		setSelectedFile(file)
		setIsShowMedia(true)
	}

	function onClickRecord(): void {
		if (capturing) handleStopCapture()
		else handleStartCapture()
	}

	return (
		<div className={styles.wrapper}>
			<Webcam
				videoConstraints={{
					facingMode: cameraMode,
				}}
				className={cn(
					[styles.video],
					[cameraMode === 'environment', styles.video__reversed]
				)}
				audio={false}
				ref={webcamRef}
			/>

			<div className={styles.actions}>
				<RecordingActions
					condition={capturing}
					onUploadFile={handleFileChange}
					onClickRecord={onClickRecord}
					onChangeCamera={onChangeCamera}
				></RecordingActions>
			</div>
		</div>
	)
}

export default Recording
