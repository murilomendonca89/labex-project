import styled from 'styled-components'


export const HomeContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 122px;
    width: 100vw;
    height: 76vh;
    background: black;
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    background: black;
    width: 50vw;
    height: 76vh;

`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 150px;
    width: 50vw;
    height: 550px;
    font-family: sans-serif;
    text-transform: uppercase;
    color: #4ea8de ;

    h1 {
        font-weight: 600;
        margin-bottom: 10px;
    }

    p {
        color: #fff;
        margin-top: 0;
    }
`

// export const primaryColor = "#4ea8de"
// export const secondaryColor = "#6930c3"
