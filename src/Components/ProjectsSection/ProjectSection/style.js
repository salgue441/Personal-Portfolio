import styled from "styled-components"

export const ProjectStyle = styled.div`
  padding: 10rem 0;

  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }

  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }

  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }

  .projects__searchBar .searchIcon {
    position: absolute;
    width: 3rem;
    right: 1rem;
    top: 15%;
  }

  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }

  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`
