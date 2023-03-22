import './index.css'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => (
    <div className="nav-bar">
      <Link className="logo" to="/">
       
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#ffffff" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="signup-link"
          to="/signup"
        >
          <FontAwesomeIcon icon={faUser} color="#ffffff" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
        </NavLink>
        <NavLink
        exact="true"
        activeclassname="active"
        className="signup-link"
        to="/signup"
      >
      </NavLink>
      </nav>

  </div>
)

export default Navbar;
