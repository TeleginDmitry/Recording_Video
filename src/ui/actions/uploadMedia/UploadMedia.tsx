import React from 'react'
import styles from './UploadMedia.module.scss'
import { ReactComponent as UploadFileSvg } from 'assets/images/images.svg'

interface IUploadMedia extends React.SVGProps<SVGSVGElement> {
	classSvg?: string
}

const UploadMedia = ({ classSvg, ...svgProps }: IUploadMedia) => {
	const completeClass = styles.icon + ' ' + classSvg

	return <UploadFileSvg className={completeClass} {...svgProps}></UploadFileSvg>
}

export default UploadMedia
