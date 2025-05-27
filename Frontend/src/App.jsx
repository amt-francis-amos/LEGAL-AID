
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Services from './pages/Services'
import Team from './pages/Team'
import Contact from './pages/Contact'
import TeamMemberDetails from './pages/TeamMemberDetails'
import ScrollToTop from './components/ScrollToTop' 

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop /> 
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/services' element={<Services />} />  
        <Route path='/team' element={<Team />} />  
        <Route path='/contact' element={<Contact />} />  
        <Route path='/team/:id' element={<TeamMemberDetails />} /> 
      </Routes>
      <Footer />
    </div>
  )
}

export default App
