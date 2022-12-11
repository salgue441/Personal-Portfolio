// Components
import PText from "../../PText/PText"
import OutButton from "../../Button/OutButton"
import AboutInfoItem from "../../Items/AboutItem/AboutItem"
import ContactBanner from "../../Contact/ContactBanner/ContactBanner"

// Styles
import { AboutPageStyles } from "./style"

// Images
import AboutImg from "../../../Assets/Images/about.jpg"

const AboutSection = () => {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hey, I am <span> Carlos Salguero</span>
              </p>

              <h2 className="about__heading">
                Computer Science Student and Self-taugh dev
              </h2>

              <div className="about__info">
                <PText>
                  I am from Santa Elena, La Libertad, El Salvador. I am a
                  Computer Science student at Tec de Monterrey, campus
                  Queretaro. Since my childhood I have been interested in
                  technology and I have always been passionate about it.
                  <br /> <br />
                  I started coding since I was 15 years old. I love to code and
                  designing engineering solutions to solve problems. I am a
                  self-taugh dev and I am always learning new things.
                  <br /> <br />
                  My goal is to make a positive impact on the world through
                  technology. I am always open to new opportunities and
                  challenges. If you have any questions, feel free to contact
                  me.
                </PText>
              </div>

              {/* CV button */}
              <OutButton
                btnText="Download CV"
                btnLink="https://drive.google.com/file/d/1jQ8UIdArf48Lo8B4ABydbve-JGCDqrV_/view?usp=share_link"
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="About me" />
            </div>
          </div>

          {/* Info items */}
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="University"
                items={[
                  "Computer Science",
                  "Tec de Monterrey",
                  "Queretaro, MX",
                  "Aug 2020 - Present",
                ]}
              />
              <AboutInfoItem
                title="High School"
                items={[
                  "General Studies",
                  "Escuela Cristiana Oasis",
                  "San Salvador, SV",
                  "Feb 2015 - Dec 2019",
                ]}
              />
            </div>

            <div className="about__info__item">
              <h1 className="about__info__heading">Skills</h1>
              <AboutInfoItem
                title="Languages"
                items={[
                  "English (proficient)",
                  "Spanish (native)",
                  "Korean (beginner)",
                ]}
              />
              <AboutInfoItem
                title="Programming"
                items={[
                  "C++",
                  "C",
                  "C#",
                  "Python",
                  "MATLAB",
                  "JavaScript",
                  "TypeScript",
                  "Rust",
                ]}
              />
              <AboutInfoItem
                title="Technologies"
                items={["Docker", "GitHub", "Git", "Unreal Engine", "Unity"]}
              />
              <AboutInfoItem
                title="Design"
                items={[
                  "Figma",
                  "Adobe XD",
                  "SolidWorks",
                  "AutoCAD",
                  "Blender",
                ]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  )
}

export default AboutSection
