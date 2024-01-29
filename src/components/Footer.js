import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


// the component function
const Footer = (props) => {

    //The Components Returned JSX
    return <div className="footer">
        <ul className="footer-ul">
            <li><a href="mailto: tim.rdrgz2017@live.com" className="footer-link"><FontAwesomeIcon icon={faEnvelope} /></a></li>
            <li><a href="https://github.com/timorodr" className="footer-link"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.linkedin.com/in/timothy-rodriguez-swe/" className="footer-link"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        </ul>
    </div>
}

// export the component
export default Footer