import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements'
import Image from './../../flow.svg'

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={Image} alt=''/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home'>
            Home
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/contact-us'>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up'>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-in'> Sign In</NavBtnLink>
        </NavBtn>
      </Nav>

    </>
  )
}

export default NavBar
