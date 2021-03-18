import styled from 'styled-components'

export const TripsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-family: sans-serif;
    text-transform: uppercase;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 76vh;
    margin-top: 70px;

    h2 {
        color: #4ea8de;
    }

    p {
        box-sizing: border-box;
        padding: 5px 50px;
        color: black;
        cursor: pointer;
    }

    p:hover {
        font-family: sans-serif;
        color: #4ea8de;
       border-bottom: 1px solid black;
    }
`
export const ImageContainer = styled.div`
    width: 50vw;
    height: 76vh;

    margin-top: 70px;

    img {
        width: 50vw;
        height: 76vh;
    }
`