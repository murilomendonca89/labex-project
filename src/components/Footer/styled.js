import styled from 'styled-components'

export const FooterContainer = styled.div`
    position:absolute;
    bottom: 0;
    width: 100vw;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4ea8de;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;

    a {
        text-decoration: none;
        color: white;
    }

    a:hover {
      color: black;
    }
    
    p {
      color: white;
      font-size: 12px;
      font-weight: 300;
      letter-spacing: 1.5px;
    }
`
