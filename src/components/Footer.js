import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


// the component function
const Footer = (props) => {

    //The Components Returned JSX
    return <div className="footer">
        {/* <ul className="footer-ul">
            <li className="footer-link"><a href="mailto: timothyjayrodriguez.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
            <li className="footer-link"><a href="https://github.com/timorodr"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li className="footer-link"><a href="https://www.linkedin.com/in/timothy-rodriguez-swe/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        </ul>
        This portfolio is inspired by Brittany Chiang */}
    </div>
}

// export the component
export default Footer