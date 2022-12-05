import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;     
    }

    :root {
        --dark-blue: #0a192f;
        --dark-blue-2: #112240;
        --gray: #8892b0;
        --gray-1: #BCB4B4;
        --light-gray: #ccd6f6;
        --green-accent: #64ffda;
        --white: #ffffff;
        --black: #000000;
    }

    html {
        font-size: 12px;
        font-family: "RobotoMono";
        background-color: var(--dark-blue);
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img, svg {
        max-width: 100%;
        height: auto;

        object-fit: cover;
    }

    button {
        outline: none;
    }

    .container {
        max-width: 1200px;
        width: 90%;
        margin: 0 auto;
    }

    // Smooth Scroll
    [data-scroll] {
        height: 100vh;
        overflow: hidden;

        background-color: var(--light-gray);

        .scroll-content {
            background-color: var(--dark-blue);
        }

        .scrollbar-track.scrollbar-track-y {
            background-color: var(--dark-blue-2);

            .scrollbar-thumb-y {
                background-color: var(--gray);
            }
        }
    }
`

export default GlobalStyle
