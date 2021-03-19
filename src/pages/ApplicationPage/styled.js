import styled from 'styled-components'

export const ApplicationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
`


export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 76vh;
    margin-top: 50px;

    form {
        width: 35vw;
        text-transform: capitalize;
    }

    h2 {
        color: #4ea8de;
        margin-bottom: 0;
    }

    p {
        box-sizing: border-box;
        color: black;
        cursor: pointer;
    }

`
export const ImageContainer = styled.div`
    width: 50vw;
    height: 76vh;
    margin-top: 70px;

    img {
        width: 50vw;
        height: 78vh;
    }
`