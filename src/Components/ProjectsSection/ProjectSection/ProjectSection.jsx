import { useEffect, useState } from "react"

// Components
import SectionTitle from "../../SectionTitle/SectionTitle"
import ProjectItem from "../../Items/ProjectItem/ProjectItem"

// Icons
import { MdSearch } from "react-icons/md"

// Data
import { FullProjectsData } from "../../../Assets/Data/ProjectData"

// Styles
import { ProjectStyle } from "./style"

const ProjectSection = () => {
  const [searchText, setSearchText] = useState("")
  const [projectData, setProjectData] = useState(FullProjectsData)

  useEffect(() => {
    if (searchText === "") return
    setProjectData(() =>
      FullProjectsData.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    )
  }, [searchText])
  const handleChange = (e) => {
    e.preventDefault()
    setSearchText(e.target.value)
    if (!e.target.value.length > 0) {
      setProjectData(FullProjectsData)
    }
  }

  return (
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle
            heading="Projects"
            subheading="Some of my recent works"
          />
          {/* Search Bar */}
          <div className="projects__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Project Name"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>

          {/* All projects */}
          <div className="projects__allItems">
            {projectData.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.name}
                img={item.img}
                desc={item.desc}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
    </>
  )
}

export default ProjectSection
