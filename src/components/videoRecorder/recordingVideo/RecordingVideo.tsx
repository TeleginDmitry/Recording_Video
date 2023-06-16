import { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import styles from './RecordingVideo.module.scss'
import cn from 'utils/classNames/classNames'

interface IRecordingVideo {
	setIsShowVideo: React.Dispatch<React.SetStateAction<boolean>>
	setRecordedChunks: React.Dispatch<React.SetStateAction<Blob[]>>
}

const RecordingVideo = ({
	setIsShowVideo,
	setRecordedChunks,
}: IRecordingVideo) => {
	const webcamRef = useRef<Webcam | null>(null)
	const mediaRecorderRef = useRef<MediaRecorder | null>(null)
	const [capturing, setCapturing] = useState<boolean>(false)
	const [cameraMode, setCameraMode] = useState<'user' | 'environment'>('user')

	const handleStartCapture = useCallback(async () => {
		setCapturing(true)
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				audio: false,
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
					setIsShowVideo(true)
				)
				mediaRecorderRef.current.start()
			}
		} catch (error) {
			console.error('Error accessing camera:', error)
		}
	}, [webcamRef, setCapturing, mediaRecorderRef, setIsShowVideo, cameraMode])

	const handleDataAvailable = useCallback(
		({ data }: BlobEvent) => {
			if (data.size > 0) {
				setRecordedChunks(prev => prev.concat(data))
			}
		},
		[setRecordedChunks]
	)

	const handleStopCapture = useCallback(() => {
		mediaRecorderRef.current!.stop()
		setCapturing(false)
	}, [mediaRecorderRef, setCapturing])

	const handleDeleteVideo = useCallback(() => {
		setIsShowVideo(false)
		setRecordedChunks([])
	}, [])

	const toggleCameraMode = useCallback(() => {
		setCameraMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'))
	}, [])

	// const handleDownload = useCallback(() => {
	// 	if (recordedChunks.length) {
	// 		const blob = new Blob(recordedChunks, { type: 'video/webm' })
	// 		const url = URL.createObjectURL(blob)
	// 		const a = document.createElement('a')
	// 		a.style.display = 'none'
	// 		document.body.appendChild(a)
	// 		a.href = url
	// 		a.download = 'react-webcam-stream-capture.webm'
	// 		a.click()
	// 		window.URL.revokeObjectURL(url)
	// 		setRecordedChunks([])
	// 	}
	// }, [recordedChunks])

	function handlerClickButton(): void {
		if (capturing) handleStopCapture()
		else handleStartCapture()
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.video__container}>
				<Webcam className={styles.video} audio={false} ref={webcamRef} />
			</div>

			<div className={styles.actions}>
				<button
					className={cn([styles.button], [capturing, styles.button__active])}
					onClick={handlerClickButton}
				></button>
				<button onClick={toggleCameraMode}>Toggle Camera</button>
			</div>
		</div>
	)
}

export default RecordingVideo
