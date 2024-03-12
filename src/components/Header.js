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
            </ul>
        </nav>
    </div>
    )
}

// export the component
export default Header