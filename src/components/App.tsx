import React from 'react'
import styles from './App.module.scss'
import MediaRecorder from './mediaRecorder/MediaRecorder'

const App = () => {
	return (
		<div className={styles.wrapper}>
			<MediaRecorder></MediaRecorder>
		</div>
	)
}

export default App
