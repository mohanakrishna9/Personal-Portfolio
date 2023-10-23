import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logos from '../../Assets/Images/Logos.png'
import LogoSubtitle from '../../Assets/Images/LogoSubtitle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faHackerrank,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="Logo" to="/">
      <img src={Logos} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="Mohanakrishna"></img>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="projects-link"
        to="/projects"
      >
        <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ankam-mohanakrishna/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mohanakrishna9"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.hackerrank.com/profile/mohanakrishnaan1"
        >
          <FontAwesomeIcon icon={faHackerrank} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
