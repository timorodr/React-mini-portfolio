import Projects from "./Projects.js"
import Header from "./Header.js"
import Footer from "./Footer.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// the component function
const Main = (props) => {

    //The Components Returned JSX
    return (
        <div>
          <div class="container">
            <header class="border-bottom lh-1 py-3">
              <div class="row flex-nowrap justify-content-center align-items-center">
            
                <div class="col-4 text-center">
                  <a class="blog-header-logo text-decoration-none" style={{color: "#e8d1c5"}}>Welcome!</a>
                </div>
            
              </div>
            </header>
              <div class="nav-scroller py-1 mb-3 border-bottom" id="nav">
                <nav class="nav nav-underline justify-content-between">
                  <a class="nav-item nav-link link-body-emphasis" href="#aboutme">About</a>
                  <a class="nav-item nav-link link-body-emphasis" href="#projects">Projects</a>
                  <a class="nav-item nav-link link-body-emphasis" href="#skills">Skills</a>
                  <a class="nav-item nav-link link-body-emphasis" href="#contact">Contact</a>
               
                </nav>
              </div>
            </div>
          
            <main class="container">
              <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis" id="aboutme">
                <div class="row"> 
                  <div class="col-lg-6 px-0">
                    <h1 class="display-4 fst-italic">Timothy Rodriguez</h1>
                    <p class="lead my-3">My story weaves together the compassion of an Occupational Therapist with the problem-solving drive of a Software Engineer. For years, I helped patients regain autonomy and rediscover joy through movement and occupational therapy. Witnessing the transformative power of individual healing ignited a new passion - I wanted to build tools that could reach and empower even more people. So, I took a leap, traded my therapy toolbox for a keyboard, and embarked on a journey into the world of code.</p>
                    <br></br>
                    <p class="lead my-3">Today, I blend my clinical empathy with a developer's analytical mind. I understand the human behind the interface, the frustration of inaccessible technology, and the joy of finding intuitive solutions. My goal is to use technology to bridge the gap between need and possibility while building software that's not just technically sound, but also compassionate, accessible, and empowering.</p>
                    <br></br>
                    <p class="lead my-3">I'm still at the beginning of this exciting journey, constantly learning and growing. But every line of code is a step towards the ultimate vision: creating a future where technology seamlessly supports and empowers human potential, fostering healing, growth, and a healthier future for all!</p>
                  </div>
                  <div class="col-lg-6 px-0">
                    <img src="https://i.imgur.com/XUsBVIy.jpeg" alt="Your Name" class="img-fluid"></img>
                  </div>
                </div>
              </div>

      <br></br>
      
            <h1 class="display-4 fst-italic text-center" id="projects" style={{color: "#e8d1c5"}}>Projects</h1>
            <div class="row mb-2">
              <div class="col-md-12">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{backgroundColor: "#B1B5A6"}}>
                  <div class="col-auto d-none d-lg-block">
                    <img class="bd-placeholder-img" width="350" height="250" src="https://i.imgur.com/xEBA7Dp.png" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                  </div>
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2" style={{color: "#000000"}}>Wellness App - Demo account username:demoacct@demo.com password:demoacct</strong>
                    <h3 class="mb-0"><b>MediManage</b></h3>
                    <div class="mb-1 text-body-secondary" style={{display: "flex", justifyContent: "start", alignItems: "center", listStyleType: "none"}}>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>Golang</li>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>React</li>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>MongoDB</li>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>Bootstrap</li>
                    </div>
                    <p class="card-text mb-auto">A medication management application for improved health, reduced side effects, fewer medication errors, and increased sense of control over health.</p>
                    
                    <div class="p-1">
                      <a href="https://main--medimanage.netlify.app/" target="_blank" class="icon-link gap-1 icon-link-hover" style={{marginRight: 12, color: "#FCF7FF", textDecoration: "underlined", textDecorationColor: "#FCF7FF"}}>
                      <FontAwesomeIcon icon={faArrowRight} />View Project
                      </a>
                      <a href="https://github.com/timorodr/go-react-final-BE" target="_blank" class="icon-link gap-1 icon-link-hover" style={{marginRight: 12, color: "#FCF7FF", textDecoration: "underlined", textDecorationColor: "#FCF7FF"}}>
                      <FontAwesomeIcon icon={faArrowRight} />View Backend Code
                      </a>
                      <a href="https://github.com/timorodr/go-react-final-FE" target="_blank" class="icon-link gap-1 icon-link-hover" style={{marginRight: 12, color: "#FCF7FF", textDecoration: "underlined", textDecorationColor: "#FCF7FF"}}>
                      <FontAwesomeIcon icon={faArrowRight} />View Frontend Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{backgroundColor: "#B1B5A6"}}>
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2" style={{color: "#000000"}}>Flashcard Study App</strong>
                    <h3 class="mb-0"><b>StudyBuddy</b></h3>
                    <div class="mb-1 text-body-secondary" style={{display: "flex", justifyContent: "start", alignItems: "center", listStyleType: "none"}}>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>MongoDB</li>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>Express</li>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>React</li>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>NodeJS</li>
                    </div>
                    <p class="mb-auto">Study Buddy is a web app for creating flashcard decks, ideal for studying software development, foreign languages, trivia, and more, developed with 3 other team members.</p>
                    <div class="p-1">
                      <a href="https://deluxe-trifle-0b2556.netlify.app/" target="_blank" class="icon-link gap-1 icon-link-hover" style={{marginRight: 12, color: "#FCF7FF", textDecoration: "underlined", textDecorationColor: "#FCF7FF"}}>
                      <FontAwesomeIcon icon={faArrowRight} />View Project
                      </a>
                      <a href="https://github.com/timorodr/Unit3_PROJECT_BE" target="_blank" class="icon-link gap-1 icon-link-hover" style={{marginRight: 12, color: "#FCF7FF", textDecoration: "underlined", textDecorationColor: "#FCF7FF"}}>
                      <FontAwesomeIcon icon={faArrowRight} />View Backend Code
                      </a>
                      <a href="https://github.com/timorodr/MERNstack-FE" target="_blank" class="icon-link gap-1 icon-link-hover" style={{marginRight: 12, color: "#FCF7FF", textDecoration: "underlined", textDecorationColor: "#FCF7FF"}}>
                      <FontAwesomeIcon icon={faArrowRight} />View Frontend Code
                      </a>
                    </div>
                  </div>
                  <div class="col-auto d-none d-lg-block">
                    <img class="bd-placeholder-img" width="350" height="250" src="https://i.imgur.com/TkHYMdb.png" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{backgroundColor: "#B1B5A6"}}>
                  <div class="col-auto d-none d-lg-block">
                    <img class="bd-placeholder-img" width="350" height="250" src="https://i.imgur.com/UErtUn6.png" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                  </div>
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2" style={{color: "#000000"}}>Tattoo Planning App - Demo account username:tim14 password:123</strong>
                    <h3 class="mb-0"><b>Tattooly</b></h3>
                    <div class="mb-1 text-body-secondary" style={{display: "flex", justifyContent: "start", alignItems: "center", listStyleType: "none"}}>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>HTML</li>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>CSS</li>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>Javascript</li>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>MongoDB</li>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>Express</li>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>EJS</li>
                    </div>
                    <p class="card-text mb-auto">Tattooly simplifies tattoo planning, allowing users to customize profiles, save sessions, and manage appointments. Join now to turn your ideas into reality and make Tattooly your ultimate canvas!</p>
                    
                    <div class="p-1">
                      <a href="https://project2-crud.onrender.com/" target="_blank" class="icon-link gap-1 icon-link-hover" style={{marginRight: 12, color: "#FCF7FF", textDecoration: "underlined", textDecorationColor: "#FCF7FF"}}>
                      <FontAwesomeIcon icon={faArrowRight} />View Project
                      </a>
                      <a href="https://github.com/timorodr/Project-2" target="_blank" class="icon-link gap-1 icon-link-hover" style={{marginRight: 12, color: "#FCF7FF", textDecoration: "underlined", textDecorationColor: "#FCF7FF"}}>
                      <FontAwesomeIcon icon={faArrowRight} />View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-md-12">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{backgroundColor: "#B1B5A6"}}>
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2" style={{color: "#000000"}}>Retro Pokemon App</strong>
                    <h3 class="mb-0"><b>PokeRumble</b></h3>
                    <div class="mb-1 text-body-secondary" style={{display: "flex", justifyContent: "start", alignItems: "center", listStyleType: "none"}}>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>HTML</li>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>CSS</li>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>Javascript</li>
                        <li style={{marginRight: 12, color: "#FCF7FF"}}>jQuery</li>
                    </div>
                    <p class="mb-auto">A retro-style searchable Pokedex(Name or ID) and Pokemon fight club app based on user weight input(+/- 5 pounds). A host of pokemon in your weight class will be the pokemon you would have to battle if you were a pokemon.</p>
                    <div class="p-1">
                      <a href="https://sealproject1-gules.vercel.app/" target="_blank" class="icon-link gap-1 icon-link-hover" style={{marginRight: 12, color: "#FCF7FF", textDecoration: "underlined", textDecorationColor: "#FCF7FF"}}>
                      <FontAwesomeIcon icon={faArrowRight} />View Project
                      </a>
                      <a href="https://github.com/timorodr/sealproject1" target="_blank" class="icon-link gap-1 icon-link-hover" style={{marginRight: 12, color: "#FCF7FF", textDecoration: "underlined", textDecorationColor: "#FCF7FF"}}>
                      <FontAwesomeIcon icon={faArrowRight} />View Code
                      </a>
                    </div>
                  </div>
                  <div class="col-auto d-none d-lg-block">
                    <img class="bd-placeholder-img" width="350" height="250" src="https://i.imgur.com/OMifOjL.png" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                  </div>
                </div>
              </div>
            </div>

              


          
            <div class="row g-5">
              <div class="col-md-8">
                <h4 class="pb-4 mb-4 fst-italic border-bottom">
                  *Please allow time for project sites to load :)
                </h4>
          
                {/* <article class="blog-post"> */}
          <h2 class="display-5 mb-1" id="skills" style={{color: "#e8d1c5"}}>Technical Skills</h2>
          <hr></hr>
            <div className="skills-container">
              <h3>Javascript</h3>
              <h3>Python</h3>
              <h3>Golang</h3>
              <h3>HTML</h3>
              <h3>CSS</h3>
              <h3>React.js</h3>
              <h3>PostgreSQL</h3>
              <h3>MongoDB</h3>
              <h3>Mongoose</h3>
              <h3>Express</h3>
              <h3>Node.js</h3>
              <h3>jQuery</h3>
              <h3>Bootstrap</h3>
              <h3>Responsive Design</h3>
            </div>
         

          {/* <p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>
          <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h2>Blockquotes</h2>
          <p>This is an example blockquote in action:</p>
          <blockquote class="blockquote">
            <p>Quoted text goes here.</p>
          </blockquote>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>
          <ul>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
          </ul>
          <p>And this is an ordered list:</p>
          <ol>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
          </ol>
          <p>And this is a definition list:</p>
          <dl>
            <dt>HyperText Markup Language (HTML)</dt>
            <dd>The language used to describe and define the content of a Web page</dd>
            <dt>Cascading Style Sheets (CSS)</dt>
            <dd>Used to describe the appearance of Web content</dd>
            <dt>JavaScript (JS)</dt>
            <dd>The programming language used to build advanced Web sites and applications</dd>
          </dl>
          <h2>Inline HTML elements</h2>
          <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
          <ul>
            <li><strong>To bold text</strong>, use <code class="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
            <li><em>To italicize text</em>, use <code class="language-plaintext highlighter-rouge">&lt;em&gt;</code>.</li>
            <li>Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr> should use <code class="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code class="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
            <li>Citations, like <cite>— Mark Otto</cite>, should use <code class="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
            <li><del>Deleted</del> text should use <code class="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text should use <code class="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
            <li>Superscript <sup>text</sup> uses <code class="language-plaintext highlighter-rouge">&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code class="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.</li>
          </ul>
          <p>Most of these elements are styled by browsers with few modifications on our part.</p>
          <h2>Heading</h2>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h3>Sub-heading</h3>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <pre><code>Example code block</code></pre>
          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
                </article>*/}
          
                <article class="blog-post"> 
          <h2 class="display-5 mb-1" style={{color: "#e8d1c5"}}>Education</h2>
          <hr></hr>
          {/* <p class="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p> */}
          <h3><b>General Assembly Software Engineering Immersive</b></h3>
          <p>24 weeks/500+ hours of intensive instruction, learning to build full stack applications.</p>
          <blockquote>
            <h3><b>University of Texas at San Antonio</b></h3>
            <p>Bachelor of Science</p>
          </blockquote>
          <blockquote class="pb-4 mb-4 border-bottom">
            <h3><b>St. Philip's College</b></h3>
            <p>Occupational Therapy Assistant, A.A.S.</p>
          </blockquote>



          {/* <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h3>Example table</h3>
          <p>And don't forget about tables in these posts:</p>
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Upvotes</th>
                <th>Downvotes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alice</td>
                <td>10</td>
                <td>11</td>
              </tr>
              <tr>
                <td>Bob</td>
                <td>4</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Charlie</td>
                <td>7</td>
                <td>9</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Totals</td>
                <td>21</td>
                <td>23</td>
              </tr>
            </tfoot>
          </table>
          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p> */}
                </article>
          
                <article class="blog-post">
          <h2 class="display-5 mb-1" style={{color: "#e8d1c5"}}>Slice of Life</h2>
          <hr></hr>
          {/* <p class="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p> */}
          <blockquote>
            <h3><b>Things I do when I'm not Coding</b></h3>
          </blockquote>
          <blockquote>
            <p>Expressing creativity through music and painting</p>
          </blockquote>
          <blockquote>
            <p>Picking things up and putting them down(working out)</p>
          </blockquote>
          <blockquote>
            <p>Traveling and trying new foods</p>
          </blockquote>
          <blockquote>
            <p>Drinking my Matcha Tea</p>
          </blockquote>

        
                </article>
          
           
          
              </div>
          
              <div class="col-md-4">
                <div class="position-sticky" style={{top: 2}}>
                  <div class="p-4 mb-3 rounded" id="connect">
                    <h4 class="fst-italic" style={{color: "#D0A48A"}}>About</h4>
                    <p class="mb-0">I build immersive, creative, and accessible digital playgrounds.</p>
                  </div>
                  <div>
                    <h1 class="fst-italic" id="contact" style={{color: "#e8d1c5"}}>Lets Connect!</h1>
                    <ul class="list-unstyled">
                      <li>
                        <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="https://www.linkedin.com/in/timothy-rodriguez-swe/" target="_blank">
                        <li style={{height: 60}} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><a href="https://www.linkedin.com/in/timothy-rodriguez-swe/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{height: 60, color: "#FCF7FF"}}/></a></li>
                          {/* <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}
                          <div class="col-lg-8">
                            <h3 class="mb-0">LinkedIn</h3>
                            {/* <small class="text-body-secondary">January 15, 2024</small> */}
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="https://github.com/timorodr" target="_blank">
                        <li style={{height: 60}} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><a href="https://github.com/timorodr" target="_blank"><FontAwesomeIcon icon={faGithub} style={{height: 60, color: "#FCF7FF"}}/></a></li>
                          {/* <img class="bd-placeholder-img" width="100%" height="96" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4UJP8NHuKjQ34J-SqrUsOkUn4LgI4TQwFA3vAtqkvw&s" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img> */}
                          <div class="col-lg-8">
                            <h3 class="mb-0">Github</h3>
                            {/* <small class="text-body-secondary">January 14, 2024</small> */}
                          </div>
                        </a>
                      </li>
                      <li>
                      <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="mailto: timothyjayrodriguez@gmail.com" target="_blank">
                        <li style={{height: 60}} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><a href="mailto: timothyjayrodriguez@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} style={{height: 60, color: "#FCF7FF"}}/></a></li>
                          {/* <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}
                          <div class="col-lg-8">
                            <h3 class="mb-0">Email</h3>
                            {/* <small class="text-body-secondary">January 13, 2024</small> */}
                          </div>
                        </a>
                      </li>
                      <li>
                      <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="2024Resume.pdf" target="_blank">
                        <li style={{height: 60}} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><a href="2024Resume.pdf" target="_blank"><FontAwesomeIcon icon={faFile} style={{height: 60, color: "#FCF7FF"}}/></a></li>
                          {/* <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}
                          <div class="col-lg-8">
                            <h3 class="mb-0">Resume</h3>
                            {/* <small class="text-body-secondary">January 13, 2024</small> */}
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                      {/* <div class="p-4">
                        <h4 class="fst-italic">Archives</h4>
                        <ol class="list-unstyled mb-0">
                          <li><a href="#">March 2021</a></li>
                          <li><a href="#">February 2021</a></li>
                          <li><a href="#">January 2021</a></li>
                          <li><a href="#">December 2020</a></li>
                          <li><a href="#">November 2020</a></li>
                          <li><a href="#">October 2020</a></li>
                          <li><a href="#">September 2020</a></li>
                          <li><a href="#">August 2020</a></li>
                          <li><a href="#">July 2020</a></li>
                          <li><a href="#">June 2020</a></li>
                          <li><a href="#">May 2020</a></li>
                          <li><a href="#">April 2020</a></li>
                        </ol>
                      </div> */}
                  {/* <div class="p-4">
                    <h4 class="fst-italic">Elsewhere</h4>
                    <ol class="list-unstyled">
                      <li><a href="#">GitHub</a></li>
                      <li><a href="#">Twitter</a></li>
                      <li><a href="#">Facebook</a></li>
                    </ol>
                  </div> */}
                </div>
              </div>
            </div>
          
          </main>

          <footer class="py-5 text-center text-body-secondary" id="footer">
            <p>Created by Timothy Rodriguez<a href="https://www.linkedin.com/in/timothy-rodriguez-swe/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{color: "black", marginLeft: 10}}/></a><a href="https://github.com/timorodr" target="_blank"><FontAwesomeIcon icon={faGithub} style={{color: "black", marginLeft: 10}}/></a><a href="mailto: timothyjayrodriguez@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} style={{color: "black", marginLeft: 10}}/></a></p>
            <p class="mb-0">
            <FontAwesomeIcon icon={faArrowUp} /><a href="#" style={{color: "black", marginLeft: 5}}>Back to top</a>
            </p>
          </footer>
        </div>
        

            

)
}

// export the component
export default Main
{/* <div className="main-me">
    <h1 className="name">Timothy Rodriguez</h1>
    <h2 className="occupation">Software Engineer</h2>
    <p className="brand">I build immersive, creative, and accessible digital playgrounds.</p>
    <Header/>
    <Footer/>
</div>   
<Projects /> */}