import React from 'react'
import styles from './Download.module.scss'
import { ReactComponent as DownloadSvg } from 'assets/images/download.svg'

interface IDownload extends React.SVGProps<SVGSVGElement> {
	classSvg?: string
}

const Download = ({ classSvg, ...svgProps }: IDownload) => {
	const completeClass = styles.icon + ' ' + classSvg

	return <DownloadSvg className={completeClass} {...svgProps}></DownloadSvg>
}

export default Download
