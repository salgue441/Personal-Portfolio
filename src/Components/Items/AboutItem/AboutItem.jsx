// Components
import PText from "../../PText/PText"

// styles
import { ItemStyle } from "./style"

const AboutItem = ({ title, items }) => {
  return (
    <ItemStyle>
      <h1 className="title">{title}</h1>

      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </ItemStyle>
  )
}

export default AboutItem
