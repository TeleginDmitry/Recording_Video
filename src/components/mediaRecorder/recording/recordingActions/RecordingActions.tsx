import React from 'react'
import Camera from 'ui/actions/camera/Camera'
import UploadMedia from 'ui/actions/uploadMedia/UploadMedia'
import RecordButton from 'ui/recordButton/RecordButton'
import UploadFile from 'ui/uploadFile/UploadFile'
import styles from './RecordingActions.module.scss'

interface IRecordingActions {
	onUploadFile: (event: React.ChangeEvent<HTMLInputElement>) => void
	onClickRecord: React.MouseEventHandler<HTMLButtonElement>
  onChangeCamera: () => void
	condition: boolean
}

const RecordingActions = ({
	onUploadFile,
	condition,
	onClickRecord,
  onChangeCamera
}: IRecordingActions) => {
	return (
		<div className={styles.actions}>
			<UploadFile onChange={onUploadFile} accept='image/*,video/*'>
				<UploadMedia></UploadMedia>
			</UploadFile>
			<RecordButton
				onClick={onClickRecord}
				condition={condition}
			></RecordButton>
			<Camera onClick={onChangeCamera}></Camera>
		</div>
	)
}

export default RecordingActions
