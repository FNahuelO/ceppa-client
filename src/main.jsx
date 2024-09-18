import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import App from './App.jsx'
import ReactGA from 'react-ga4'
import Desktop from './Desktop.jsx'
import './index.css'

// Configurar ReactGA con tu ID de seguimiento de Google Analytics
ReactGA.initialize('G-XCTJDR6WF7')

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

  const getTitleFromPath = (pathname) => {
    switch (pathname) {
      case '/':
        return 'CEPPA: Centro de Psicoterapias con Psicodélicos de Argentina'
      case '/nosotros':
        return 'Nosotros'
      case '/contacto':
        return 'Contacto'
      case '/equipo':
        return 'Equipo'
      case '/revistas':
        return 'Revistas'
      default:
        return 'CEPPA'
    }
  }

  return (
    <Provider store={store}>
      <React.StrictMode>
        {isWideScreen ? (
          <Desktop getTitleFromPath={getTitleFromPath} />
        ) : (
          <App getTitleFromPath={getTitleFromPath} />
        )}
      </React.StrictMode>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<ConditionalApp />)
