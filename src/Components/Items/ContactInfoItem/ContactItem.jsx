// Components
import PText from "../../PText/PText"

// Icons
import { MdPlace } from "react-icons/md"

// Style
import { ItemStyles } from "./style"

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = "This is info",
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="text">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  )
}
