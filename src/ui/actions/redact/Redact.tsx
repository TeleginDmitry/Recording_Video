import React from 'react'
import styles from './Redact.module.scss'
import { ReactComponent as RedactorSvg } from 'assets/images/redactor.svg'

interface IRedact extends React.SVGProps<SVGSVGElement> {
	classSvg?: string
}

const Redact = ({ classSvg, ...svgProps }: IRedact) => {
	const completeClass = styles.icon + ' ' + classSvg

	return <RedactorSvg className={completeClass} {...svgProps}></RedactorSvg>
}

export default Redact
