import { Link } from "react-router-dom"
import styled from "styled-components"

const ButtonStyles = styled.div`
  margin-top: 2rem;

  .button {
    font-size: 2.2rem;
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    font-family: "RobotoMono-Regular";

    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--gray)"};
    color: ${(props) => (props.outline ? "var(--gary)" : "black")};
  }

  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`

const Button = ({ btnText, btnLink, outline = false }) => {
  return (
    <ButtonStyles outline={outline}>
      <Link to={btnLink} className="button">
        {btnText}
      </Link>
    </ButtonStyles>
  )
}

export default Button
