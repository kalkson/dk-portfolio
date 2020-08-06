import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Rowdies&display=swap');

    *, *:before, *:after {
        box-sizing: border-box;
        font-family: 'Rowdies', cursive;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, html {
        padding: 0;
        margin: 0;
        overflow-x: hidden;
        min-height: 100vh;
    }

    body {
        overflow: hidden;
    }

    img {
        position: absolute;
    }
    
    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: inherit;
        }
    }

    button {
        background-color: transparent;
        border: none;
        outline: none;

        &:focus, &:active, &:hover {
            border: none;
            outline: none;
        }
    }

    .navbar-button-active {
        
        color: #181818 !important;

        &:after {
            height: 100% !important;
        }
    }

    .active {
        display: block;
        animation-name: appear;
        animation-duration: 500ms;
        animation-fill-mode: forwards;

        @keyframes appear {
            0% {
                opacity: 1;
                transform: translateX(-1600px);
            }
            100% {
                opacity: 1;
                transform: translateX(0px);
            }
        
        }
    }

     .slick-prev::before, .slick-next::before {
        color: #EBEBEB;

        @media (max-width: 800px) {
            content: '';
            display: none;
        }
    }

     .slick-prev, .slick-next {
        transform: scale(2);
    }

    /*
    .slick-prev {
        background: url('./../assets/images/bg1.png') no-repeat center center !important;
        width: 16px;
        height: 24px;
        background-color: red;
    }

    .slick-next::before {

    } */

`;

export default GlobalStyle;
