import App from './components/App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/_mixins.module.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<App></App>
	</React.StrictMode>
)
