import Projects from "./Projects.js"
import Header from "./Header.js"


// the component function
const Main = (props) => {

    //The Components Returned JSX
    return (
    <div className="Main"> 
        <div className="main-me">
            <h1>Timothy Rodriguez</h1>
            <h2>Software Engineer</h2>
            <p>Empathetic innovator with a problem-solving mind, transitioning from occupational therapy to build empowering software solutions for a healthier future.</p>
            <Header/>
        </div>
        <Projects />
    </div>
    )
}

// export the component
export default Main