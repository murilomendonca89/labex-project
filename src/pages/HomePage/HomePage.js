import React from 'react'
import { useHistory } from "react-router-dom";
import { HomeContainer, ImageContainer, TextContainer } from './styled'
import pilot from '../../assets/img/pilot.jpeg'
import { Button } from '@material-ui/core'
import { goToTripsPage } from '../../routes/coordinator';
import { useProtectedPage } from '../../hooks/useProtectedPage'

export const HomePage = () => {
    const history = useHistory();
    useProtectedPage();

    return (
        <HomeContainer>
            <TextContainer>
                <h1>Seja um astronauta</h1>
                <p>Embarque conosco em uma aventura alucinante e inesquecível,<br />
                    descubra as maravilhas do espaço, e aventure-se conosco!
                </p>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    onClick={() => { goToTripsPage(history) }}
                >
                    Conheça nossas viagens
                    </Button>
            </TextContainer>
            <ImageContainer>
                <img src={pilot} alt="imagem astronauta" />
            </ImageContainer>
        </HomeContainer>
    )
}