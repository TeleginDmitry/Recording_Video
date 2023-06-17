import React from 'react'
import styles from './Camera.module.scss'
import { ReactComponent as CameraSvg } from 'assets/images/Subtract.svg'

interface ICamera extends React.SVGProps<SVGSVGElement> {
	classSvg?: string
}

const Camera = ({ classSvg, ...svgProps }: ICamera) => {
	const completeClass = styles.icon + ' ' + classSvg

	return <CameraSvg className={completeClass} {...svgProps}></CameraSvg>
}

export default Camera
