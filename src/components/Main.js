import Projects from "./Projects.js"
import Header from "./Header.js"
import Footer from "./Footer.js"


// the component function
const Main = (props) => {

    //The Components Returned JSX
    return (
    <div className="Main"> 
        <div className="main-me">
            <h1 className="name">Timothy Rodriguez</h1>
            <h2 className="occupation">Software Engineer</h2>
            <p className="brand">Empathetic innovator with a problem-solving mind, transitioning from occupational therapy to build empowering software solutions for a healthier future.</p>
            <Header/>
            <Footer/>
        </div>   
        <Projects />
    </div>
    )
}

// export the component
export default Main