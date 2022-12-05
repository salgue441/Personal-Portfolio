// Components
import Button from "../Button/Button"
import PText from "../PText/PText"

// Data
import { SocialData } from "../../Assets/Data/SocialData"

// images
import SocialMediaArrow from "../../Assets/Images/social-media-arrow.svg"
import ScrollDownArrow from "../../Assets/Images/scroll-down-arrow.svg"

// styles
import { HeroSectionStyles } from "./style"

const HeroSection = () => {
  return (
    <HeroSectionStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hi, I'm</span>
            <span>Carlos Salguero</span>
          </h1>

          <div className="hero__info">
            <img alt="One of my images" />
          </div>

          <div className="hero__img">
            <PText>
              I am a Computer Science student at Tecnologico de Monterrey.
            </PText>
            <Button btnText="See my works" btnLink="/projects" />
          </div>

          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="Social Media Arrow" />
            </div>

            <div className="hero__social__text">
              {SocialData.map((item, index) => (
                <li>
                  <a
                    href={item.link}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  )
}

export default HeroSection
