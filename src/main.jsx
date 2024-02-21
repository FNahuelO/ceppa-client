import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Desktop from './Desktop.jsx'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './redux/store.js'
import App from './App.jsx'
import ReactGA from 'react-ga'

ReactGA.initialize('G-2PSRN0KE2P')

const ConditionalApp = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600)

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 600)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Provider store={store}>
      <React.StrictMode>
        {isWideScreen ? <Desktop /> : <App />}
      </React.StrictMode>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<ConditionalApp />)
