import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import App from './App'
import { SettingsContextWrapper } from './context/settingsContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <SettingsContextWrapper>
        <App />
    </SettingsContextWrapper>
)
