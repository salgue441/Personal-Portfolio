// Components
import Button from "../../Button/Button"
import PText from "../../PText/PText"
import SectionTitle from "../../SectionTitle/SectionTitle"

// styles
import { AboutSectionStyles } from "./style"

// image
import AboutImg from "../../../Assets/Images/about.jpg"

const AboutSection = () => {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About me"
          />
          <PText>
            I am a computer science student at Tec de Monterrey, campus
            Queretaro. I am currently in my 4th semester. I am a very passionate
            person, I love to learn new things and I am always looking for new
            challenges. I am a very hard worker and I am always looking for new
            opportunities to grow as a person and as a professional.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Works" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>

        <div className="aboutSection__right">
          <img src={AboutImg} alt="about" />
        </div>
      </div>
    </AboutSectionStyles>
  )
}

export default AboutSection
