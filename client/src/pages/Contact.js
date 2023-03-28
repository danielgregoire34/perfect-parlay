import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1>Contact Info</h1>
      <div className="Kenji contact-box">
        Kenji Fleming
        <div>
          <a href="mailto:kwf1999@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <br />
          <a href="https://github.com/N3tRunn3rr">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className="Kennedy contact-box">
        Kennedy Hayles
        <div>
          <a href="mailto:kennedyhayles@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <br />
          <a href="https://github.com/kennedyisn">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className="Daniel contact-box">
        Daniel Gregoire
        <div>
          <a href="mailto:danielgregoire34@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <br />
          <a href="https://github.com/danielgregoire34">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className="Keenan contact-box">
        Keenan Goode
        <div>
          <a href="mailto:chasegoode7@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <br />
          <a href="https://github.com/flayouth">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className="Myles contact-box">
        Myles Nichols
        <div>
          <a href="mailto:mylesnichols21@yahoo.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <br />
          <a href="https://github.com/MylesNichols">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;