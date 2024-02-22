import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Nosotros from './pages/Nosotros'
import Team from './pages/Team'
import Revistas from './pages/Revistas'
import Admin from './pages/admin/Admin'
import ManageTeam from './pages/admin/ManageTeam'
import ManageMagazine from './pages/admin/ManageMagazine'
import Stadistics from './pages/admin/Stadistics'
import Nav from './components/Nav'
import { Container } from './style/Container'
import Footer from './components/Footer'
import Loading from './components/Loading'

function InterfaceUser({ children }) {
  return (
    <Container
      width="100vw"
      height="100vh"
      flexDirection="column"
      overflow="auto"
      id="scroll"
    >
      <Nav />
      <Container flex="1">{children}</Container>
      <Footer />
    </Container>
  )
}

function App({ getTitleFromPath }) {
  return (
    <Router>
      <AppRoutes getTitleFromPath={getTitleFromPath} />
    </Router>
  )
}

function AppRoutes({ getTitleFromPath }) {
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 400) // Simula la carga durante 2 segundos

    return () => clearTimeout(timer)
  }, [location])

  useEffect(() => {
    document.title = getTitleFromPath(location.pathname)
  }, [location.pathname])

  // Función para obtener el título basado en el path actual
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
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
            path="/contacto"
            element={
              <InterfaceUser>
                <Contact />
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
            path="/equipo"
            element={
              <InterfaceUser>
                <Team />
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
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/admin/manage-team"
            element={
              <Admin>
                <ManageTeam />
              </Admin>
            }
          />
          <Route
            path="/admin/manage-magazine"
            element={
              <Admin>
                <ManageMagazine />
              </Admin>
            }
          />
          <Route
            path="/admin/stadistics"
            element={
              <Admin>
                <Stadistics />
              </Admin>
            }
          />
        </Routes>
      )}
    </>
  )
}

export default App
