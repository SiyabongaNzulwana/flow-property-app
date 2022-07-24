import './App.css'
import NavBar from './components/Navbar/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import PropertyDetails from './pages/PropertyDetails'
import ContactUs from './pages/ContactUs'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dropdown from './components/Dropdown'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Dropdown/>}></Route>
        <Route path="/home" element={<Dropdown/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/property/:propertyId" element={<PropertyDetails/>}></Route>
        <Route path="/contact-us" exact element={<ContactUs/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
