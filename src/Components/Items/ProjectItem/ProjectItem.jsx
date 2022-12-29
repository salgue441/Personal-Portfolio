import { Link } from "react-router-dom"

// icons
import { FiGithub } from "react-icons/fi"

// styles
import { ProjectItemStyles } from "./style"

const ProjectItem = ({
  img,
  title = "Project Title",
  desc = "Project Description",
  icon = <FiGithub />,
  link = "#",
}) => {
  // Open link in new tab
  const openLink = () => {
    window.open(link, "_blank")
  }

  return (
    <ProjectItemStyles>
      <div className="projectItem__img">
        <img src={img} alt="project image" />
      </div>

      <div className="projectItem__info">
        <h3 className="projectItem__title">{title}</h3>

        <p className="projectItem__desc">{desc}</p>
        <div className="projectItem__Referral">
          <Link onClick={openLink}>
            <p className="projectItem__Link">See Project</p>
          </Link>
        </div>
      </div>
    </ProjectItemStyles>
  )
}

export default ProjectItem
