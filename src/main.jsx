import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import App from './App.jsx'
import ReactGA from 'react-ga4'
import Desktop from './Desktop.jsx'
import './index.css'

// Configurar ReactGA con tu ID de seguimiento de Google Analytics
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

  useEffect(() => {
    // Enviar datos de página vista a Google Analytics al cambiar la ruta
    const unregister = history.listen((location) => {
      ReactGA.send({ hitType: 'pageview', page: location.pathname })
    })

    return unregister
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
