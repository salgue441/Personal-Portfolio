// Components
import ContactForm from "../../Contact/ContactForm/ContactForm"
import ContactInfoItem from "../../Items/ContactInfoItem/ContactItem"
import SectionTitle from "../../SectionTitle/SectionTitle"

// Icons
import { MdEmail, MdLocalPhone } from "react-icons/md"

// Styles
import { ContactSectionStyle } from "./style"

const ContactSection = () => {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact" subheading="Get in touch" />

        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+52 442 880 3421" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="carlossalguero441@gmail.com"
            />
            <ContactInfoItem text="Queretaro, Queretaro" />
          </div>

          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  )
}

export default ContactSection
