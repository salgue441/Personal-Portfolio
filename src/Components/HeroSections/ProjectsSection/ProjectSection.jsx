// Components
import ProjectItem from "../../Items/ProjectItem/ProjectItem"
import SectionTitle from "../../SectionTitle/SectionTitle"

// Swiper Components
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"
import "swiper/swiper-bundle.min.css"

// Data
import { projectData } from "../../../Assets/Data/ProjectData"

// Styles
import { ProjectSectionStyle } from "./style"

const ProjectsSection = () => {
  // Swiper modules
  SwiperCore.use([Navigation])

  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of my recent works" />

        <div className="projects__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projectData.map((project, index) => {
              if (index >= 5) return

              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                    link={project.link}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  )
}

export default ProjectsSection
