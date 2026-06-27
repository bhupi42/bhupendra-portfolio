import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(React.createElement(React.StrictMode, null, React.createElement(App)))
