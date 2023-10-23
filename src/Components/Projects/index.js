import './index.scss'

const Projects = () => {
  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>My Projects</h1>
          <p>
            Explore my portfolio showcasing front-end projects crafted with
            cutting-edge technologies, such as React.js, seamlessly integrated
            with the fundamentals of HTML, CSS, and JavaScript. Click on the
            enticing tiles alongside to experience live demonstrations of my
            work. Delve deeper into the intricacies of these projects by
            accessing their source code on my GitHub repository. Your visit is
            greatly appreciated; please feel free to explore and engage with my
            work.
          </p>
        </div>
        <div className="tiles-zone">
          <ul>
            <li>
              <a
                href="https://civilquiz.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                Civil Quiz App
              </a>
            </li>
            <li>
              <a
                href="https://memorygamewithgot.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                Memory Game with GOT
              </a>
            </li>
            <li>
              <a
                href="https://guessnomk.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                Guess a Number
              </a>
            </li>
            <li>
              <a
                href="https://text-editor-mk.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                Text editor
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Projects
