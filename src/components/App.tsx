import React from 'react'
import VideoRecorder from './videoRecorder/VideoRecorder'
import styles from './App.module.scss'

const App = () => {
	return (
		<div className={styles.wrapper}>
			<VideoRecorder></VideoRecorder>
		</div>
	)
}

export default App
