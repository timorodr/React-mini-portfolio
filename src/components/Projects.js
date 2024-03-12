import Aboutme from "./Aboutme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// the component function
const Projects = (props) => {

    //The Components Returned JSX
    return (
    <div className="projects">
        <Aboutme/>
        <h1 id="recent-projects">Recent Projects</h1>
        <div className="projects-container2">
            <img src="https://i.imgur.com/OMifOjL.png" className="project-image" width="200" height="130"/>
            <div className="project-text">
                <h2 className="project-title"><a href="https://sealproject1-gules.vercel.app/">PokeRumble</a></h2>
                <p className="project-description"><a href="https://github.com/timorodr/sealproject1" className="project-github">A searchable Pokedex and Pokemon fight club app based on weight class. Based on user weight input, a host of pokemon in your weight class will be the pokemon you would have to battle if you were a pokemon.</a></p>
                <ul className="project-languages">
                    <li className="project-li">HTML</li>
                    <li className="project-li">CSS</li>
                    <li className="project-li">Javascript</li>
                    <li className="project-li">jQuery</li>
                </ul>
            </div>
        </div>
        <div className="projects-container">
            <img src="https://i.imgur.com/UErtUn6.png" className="project-image" width="200" height="130"/>
            <div className="project-text">
                <h2 className="project-title"><a href="https://project2-crud.onrender.com/">Tattooly: Tattoo Planning App</a></h2>
                <p className="project-description"><a href="https://github.com/timorodr/Project-2" className="project-github">Tattooly is a tattoo planning app allowing for profile customizability, session saving, and everything needed for your next tattoo appointment! Create an account and begin adding your favorite tattoo reference photos, editing your budget, and updating your calendar for your next appointment. Enjoy, and make this app your canvas!</a></p>
                <ul className="project-languages">
                    <li className="project-li">HTML</li>
                    <li className="project-li">CSS</li>
                    <li className="project-li">Javascript</li>
                    <li className="project-li">Express.js</li>
                    <li className="project-li">MongoDB</li>
                </ul>
            </div>
        </div>
        <div className="projects-container2">
            <img src="https://i.imgur.com/21pmldV.png" className="project-image" width="200" height="130"/>
            <div className="project-text">
                <h2 className="project-title"><a href="https://deluxe-trifle-0b2556.netlify.app/">Study Buddy</a></h2>
                <p className="project-description"><a href="https://github.com/timorodr/MERNstack-FE" className="project-github">Study Buddy is a web application that allows users to create decks of flashcards to help them study anything from software development to foreign languages to trivia. This project was completed in collaboration with 3 other team members.</a></p>
                <ul className="project-languages">
                    <li className="project-li">MongoDB</li>
                    <li className="project-li">Express.js</li>
                    <li className="project-li">React</li>
                    <li className="project-li">NodeJS</li>
                    <li className="project-li">CSS</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

// export the component
export default Projects