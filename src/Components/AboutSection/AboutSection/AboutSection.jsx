// Components
import Button from "../../Button/Button"
import PText from "../../PText/PText"
import SectionTitle from "../../SectionTitle/SectionTitle"

// image

// styles
import { AboutSectionStyles } from "./style"

const AboutSection = () => {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <PText>
            I am a Computer Science student at Tecnologico de Monterrey and a
            self-taught developer. I am passionate about learning new things and
            I am always looking for new opportunities to improve my skills. My
            passions are climbing, reading, playing video games, learning, and
            coding.
          </PText>

          <div className="aboutSection__buttons">
            <Button btnText="Works" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>

        <div className="aboutSection__right">
          <img src="https://i.imgur.com/8Q5ZQ2u.jpg" alt="about" />
        </div>
      </div>
    </AboutSectionStyles>
  )
}

export default AboutSection
