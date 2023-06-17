import React, { ChangeEvent } from 'react'
import { useRef } from 'react'
import styles from './UploadFile.module.scss'

interface IUploadFile {
	accept?: string
	wrapperClass?: string
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
	children: React.ReactNode
	multiple?: boolean
}

const UploadFile = ({
	accept = 'image/*, video/*',
	wrapperClass,
	onChange,
	children,
	multiple = false
}: IUploadFile) => {
	const inputFile = useRef<HTMLInputElement>(null)

	function clickContent() {
		if (inputFile.current) {
			inputFile.current.click()
		}
	}

	return (
		<div className={wrapperClass ? wrapperClass : styles.wrapper}>
			<input
				ref={inputFile}
				className={styles.file}
				multiple={multiple}
				type='file'
				accept={accept}
				onChange={onChange}
			/>
			<div onClick={clickContent} className={styles.content}>
				{children}
			</div>
		</div>
	)
}

export default UploadFile
