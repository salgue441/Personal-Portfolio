// Components
import PText from "../../PText/PText"

// Default icon
import { MdDesktopMac } from "react-icons/md"

// Styles
import { ItemStyles } from "./style"

export default function ServicesItem({
  icon = <MdDesktopMac />,
  title = "Lorem",
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}) {
  return (
    <ItemStyles className="servicesItem">
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  )
}
