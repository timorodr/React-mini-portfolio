// the component function
const Header = (props) => {

    //The Components Returned JSX
    return (
    <div className="Header"> This is the Header
        <nav>
            <ul>
                <li>About</li>
                <li><a href="https://github.com/timorodr">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/timothy-rodriguez-swe/">LinkedIn</a></li>
            </ul>
        </nav>
    </div>
    )
}

// export the component
export default Header