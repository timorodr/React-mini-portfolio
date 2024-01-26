// the component function
const Projects = (props) => {

    //The Components Returned JSX
    return (
    <div className="projects-container">
        <img src="https://i.imgur.com/UErtUn6.png" className="project-image" width="200" height="130"/>
        <div className="project-text">
            <h2 className="project-title">Tattooly: Tattoo Planning App</h2>
            <p className="project-description">Tattooly is a tattoo planning app allowing for profile customizability, session saving, and everything needed for your next tattoo appointment! Create an account and begin adding your favorite tattoo reference photos, editing your budget, and updating your calendar for your next appointment. Enjoy, and make this app your canvas!!</p>   
            <ul className="project-languages">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Express.js</li>
                <li>MongoDB</li>
            </ul>
        </div>
    </div>
    )
}

// export the component
export default Projects