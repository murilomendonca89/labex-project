import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const TripsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-family: sans-serif;
    text-transform: uppercase;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 76vh;
    width: 35vw;
    margin-right: 80px;
    margin-top: 70px;

    h2 {
        color: #4ea8de;
        margin: 0;
    }

    strong { 
        color: #4ea8de; 
    }

    p {
        margin-bottom: 12px ;
    }
`
export const ImageContainer = styled.div`
    height: 76vh;
    margin-top: 60px;

    img {
        height: 76vh;
    }
`

export const ButtonStyled = styled(Button)`
    width: 150px;
`

