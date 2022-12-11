import styled from "styled-components"

export const ServicesItemStyles = styled.div`
  padding: 10rem 0;

  .servicesItem__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .servicesItem__allItems {
      flex-direction: column;
      gap: 5rem;
      max-width: 100%;
      margin: 0 auto;
      margin-top: 5rem;
    }
  }
`
