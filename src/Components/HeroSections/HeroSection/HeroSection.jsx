// Components
import PText from "../../PText/PText"

// Data
import { SocialData } from "../../../Assets/Data/SocialData"

// Styles
import { HeroStyles } from "./style"

// Images
import ScrollDownArrow from "../../../Assets/Images/scroll-down-arrow.svg"
import SocialMediaArrow from "../../../Assets/Images/social-media-arrow.svg"
import HeroImg from "../../../Assets/Images/hero_img.jpg"

const HeroSection = () => {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hi, I'm </span>
            <span className="hero__name">Carlos Salguero</span>
          </h1>

          {/* hero image */}
          <div className="opacity">
            <div className="hero__img">
              <img src={HeroImg} alt="" height="500px" />
            </div>
          </div>

          <div className="hero__info">
            {/* Description */}
            <PText className="hero__info__p">
              A Computer Science Student at Tec de Monterrey.
            </PText>
          </div>

          {/* Social Media Icons */}
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow </p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>

            <div className="hero__social__text">
              <ul>
                {SocialData.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ScrollDown */}
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown arrow icon" />
          </div>
        </div>
      </div>
    </HeroStyles>
  )
}

export default HeroSection
