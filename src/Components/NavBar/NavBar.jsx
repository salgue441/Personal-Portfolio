import { useState } from "react"
import { NavLink } from "react-router-dom"

// icons
import { MdClose, MdMenu } from "react-icons/md"

// Data
import { SidebarData } from "../../Assets/Data/SidebarData"

// styles
import { NavStyles } from "./style"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavStyles>
      {/* Mobile Icons */}
      <div
        className="mobile-menu-icon"
        onClick={toggle}
        role="button"
        tabIndex={0}
        onKeyDown={toggle}
      >
        <MdMenu />
      </div>

      <ul className={isOpen ? "navItems hide-item" : "navItems"}>
        <div
          className="closeNavIcon"
          onClick={toggle}
          role="button"
          tabIndex={0}
          onKeyDown={toggle}
        >
          <MdClose />
        </div>

        {/* List Items  */}
        {SidebarData.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={item.path}
                onClick={toggle}
                role="button"
                onKeyDown={toggle}
                tabIndex={0}
              >
                {item.title}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </NavStyles>
  )
}

export default NavBar
