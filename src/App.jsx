import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import { Container } from './style/Container'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import QuienesSomos from './pages/QuienesSomos'
import Team from './pages/Team'
import Admin from './pages/admin/Admin'
import ManageTeam from './pages/admin/ManageTeam'
import ManageMagazine from './pages/admin/ManageMagazine'
import Revistas from './pages/Revistas'
import Login from './pages/admin/Login'

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />}></Route>
        <Route
          path="manage-team"
          element={
            <Admin>
              <ManageTeam />
            </Admin>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="manage-magazine"
          element={
            <Admin>
              <ManageMagazine />
            </Admin>
          }
        />
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
          path="/quienes-somos"
          element={
            <InterfaceUser>
              <QuienesSomos />
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
      </Routes>
    </Router>
  )
}

export default App