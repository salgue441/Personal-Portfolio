// Components
import SectionTitle from "../../SectionTitle/SectionTitle"
import ServicesItem from "../../Items/ServicesSectionItem/ServicesItem"

// Icons
import { MdCode, MdComputer } from "react-icons/md"
import { FaRobot } from "react-icons/fa"
import { IoGameControllerSharp } from "react-icons/io5"
// Styles
import { ServicesItemStyles } from "./style"

const ServicesSection = () => {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle subheading="What I can do" heading="My Services" />

        <div className="servicesItem__allItems">
          <ServicesItem
            icon={<MdCode />}
            title="Coding Projects"
            desc="Develop computer programs. Experience with Python, C++, and C#."
          />
          <ServicesItem
            icon={<IoGameControllerSharp />}
            title="Game Development"
            desc="Devleop games using Unity and Unreal Engine. Experience with C#, C++ and Blueprints."
          />
          <ServicesItem
            icon={<FaRobot />}
            title="IOT and Robotics"
            desc="Implementation of IOT, Robotics, Circuit Design, Circuit Simulation, etc."
          />
          <ServicesItem
            icon={<MdComputer />}
            title="Computer Simulations"
            desc="Computer Simulations with MATLAB, AutoCad, SolidWorks, etc."
          />
        </div>
      </div>
    </ServicesItemStyles>
  )
}

export default ServicesSection
