import React ,{useState} from 'react'
import './Navbar.css'
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import Button from '../UI/button/Button';
import "../UI/button/Button.css"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu(){
    setShowMenu(prevState => !prevState);
  }
  return (
    <nav className='container navbar'>
      <div className="logo">
        <p className='logo-text'>MySpace<span>X</span></p>
      </div>
      <menu>
        <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
          <li><a href="#">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#download">Download</a></li>
          <li><a href="#subscribe">Subscribe</a></li>
          <li><Button text={"Learn More"} btnClass={"btn-dark nav-btn"} href={"#faq"}/></li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {
        showMenu ? <RiCloseLine color='#fff' size={30}/> : <AiOutlineBars color='#fff' size={27}/>
      }
      </div>
      </nav>
  )
}

export default Navbar