import Aboutme from "./Aboutme"

// the component function
const Projects = (props) => {

    //The Components Returned JSX
    return (
    <div className="projects">
        <Aboutme/>
        <div className="projects-container">
            <img src="https://i.imgur.com/UErtUn6.png" className="project-image" width="200" height="130"/>
            <div className="project-text">
                <h2 className="project-title"><a href="https://project2-crud.onrender.com/">Tattooly: Tattoo Planning App</a></h2>
                <p className="project-description">Tattooly is a tattoo planning app allowing for profile customizability, session saving, and everything needed for your next tattoo appointment! Create an account and begin adding your favorite tattoo reference photos, editing your budget, and updating your calendar for your next appointment. Enjoy, and make this app your canvas!!</p>
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
            <img src="https://i.imgur.com/OMifOjL.png" className="project-image" width="200" height="130"/>
            <div className="project-text">
                <h2 className="project-title"><a href="https://sealproject1-gules.vercel.app/">PokeRumble</a></h2>
                <p className="project-description">A searchable Pokedex and Pokemon fight club app based on weight class. Based on user weight input, a host of pokemon in your weight class will be the pokemon you would have to battle if you were a pokemon.</p>
                <ul className="project-languages">
                    <li className="project-li">HTML</li>
                    <li className="project-li">CSS</li>
                    <li className="project-li">Javascript</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

// export the component
export default Projects