import styled from "styled-components"

export const ItemStyles = styled.div`
  text-align: center;

  .servicesItem__icon {
    svg {
      width: 3rem;
      fill: var(--green-accent);
    }
  }

  .servicesItem__title {
    color: var(--green-accent);
    font-size: 2.5rem;
    font-family: "Montserrat-SemiBold";
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .para {
    marign-top: 2rem;
  }
`
