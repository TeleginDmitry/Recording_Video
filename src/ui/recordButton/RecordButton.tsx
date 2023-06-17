import React from 'react'
import cn from 'utils/classNames/classNames'
import styles from './RecordButton.module.scss'

interface IRecordButton {
	onClick: React.MouseEventHandler<HTMLButtonElement>
	condition: boolean
}

const RecordButton = ({ onClick, condition }: IRecordButton) => {
	return (
		<button
			className={cn([styles.button], [condition, styles.button__active])}
			onClick={onClick}
		></button>
	)
}

export default RecordButton
