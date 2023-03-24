import './index.css'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faExclamation, faHome, faUser,  } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/"></Link>
    <nav>
      <NavLink exact activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#ffffff" />
      </NavLink>
      <NavLink activeClassName="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faUser} color="#ffffff" />
      </NavLink>
      <NavLink activeClassName="active" className="check-link" to="/predictorpicker">
        <FontAwesomeIcon icon={faExclamation} color="#ffffff" />
      </NavLink>
    </nav>
  </div>
)

export default Navbar;
