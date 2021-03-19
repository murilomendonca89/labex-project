import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const HomeContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 122px;
    width: 100vw;
    height: 76vh;
    background: black;
    font-family: 'Roboto', sans-serif;
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
    text-transform: uppercase;
    color: #4ea8de ;

    h1 {

        margin-bottom: 10px;
    }

    p {
        font-weight: 300;
        color: #fff;
        margin-top: 0;
    }
`
export const ButtonStyled = styled(Button)`
    width: 280px;
`
