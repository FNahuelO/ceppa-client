import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import App from './App.jsx'
import ReactGA from 'react-ga4'
import Desktop from './Desktop.jsx'
import './index.css'

// Configurar ReactGA con tu ID de seguimiento de Google Analytics

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

// Enviar datos de página vista a Google Analytics
ReactGA.initialize('G-2PSRN0KE2P')

ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname,
})

ReactDOM.createRoot(document.getElementById('root')).render(<ConditionalApp />)
