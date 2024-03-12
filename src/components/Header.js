// the component function
const Header = (props) => {

    //The Components Returned JSX
    return (
    <div className="Header">
        <nav>
            <ul className="header-ul">
                <li className="header-li"><a href="#aboutme">About</a></li>
                <li className="header-li"><a href="https://github.com/timorodr">GitHub</a></li>
                <li className="header-li"><a href="https://www.linkedin.com/in/timothy-rodriguez-swe/">LinkedIn</a></li>
                <li className="header-li"><a href="https://docs.google.com/document/d/1RFiD9BfOOwi-aQmA1ExnzfzXSRBeyFMUq-isewrs8N0/edit?usp=sharing">Resume</a></li>
            </ul>
        </nav>
    </div>
    )
}

// export the component
export default Header