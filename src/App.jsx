import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/mobile/Home'
import { Container } from './style/Container'
import Nav from './components/mobile/Nav'
import Team from './pages/mobile/Team'
import Nosotros from './pages/mobile/Nosotros'
import Contact from './pages/mobile/Contact'
import Revistas from './pages/mobile/Revistas'

function InterfaceUser({ children }) {
  return (
    <Container
      height="100lvh"
      width="100vw"
      flexDirection="column"
      overflowY="auto"
      id="scroll"
      position="relative"
    >
      <Nav />
      <Container flex="1" flexDirection="column">
        {children}
      </Container>
    </Container>
  )
}

export default function App({ getTitleFromPath }) {
  useEffect(() => {
    document.title = getTitleFromPath(location.pathname)
  }, [location.pathname])
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <InterfaceUser>
              <Home />
            </InterfaceUser>
          }
        />
        <Route
          path="/equipo"
          element={
            <InterfaceUser>
              <Team />
            </InterfaceUser>
          }
        />
        <Route
          path="/nosotros"
          element={
            <InterfaceUser>
              <Nosotros />
            </InterfaceUser>
          }
        />
        <Route
          path="/contacto"
          element={
            <InterfaceUser>
              <Contact />
            </InterfaceUser>
          }
        />
        <Route
          path="/revistas"
          element={
            <InterfaceUser>
              <Revistas />
            </InterfaceUser>
          }
        />
      </Routes>
    </Router>
  )
}
