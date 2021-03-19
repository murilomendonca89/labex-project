import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { TripsContainer, TextContainer, ImageContainer, ButtonStyled } from './styled'
import { goBack } from '../../routes/coordinator'
import { BASE_URL } from '../../constants/urls'
import earth from '../../assets/img/earth.jpg'


export const TripDetailsPage = () => {
    const history = useHistory();

    const [trips, setTrips] = useState({});
    const pathParams = useParams();
    const id = pathParams.id;

    useEffect(() => {
        getTripDetail();
    }, []);

    const getTripDetail = () => {
        axios.get(`${BASE_URL}/trip/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((response) => {
                setTrips(response.data.trip)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <TripsContainer>
            <TextContainer>
                <h2>Detalhes da viagem</h2>
                <p><strong>Nome:</strong><br /> {trips.name}</p>
                <p><strong>Planeta:</strong><br /> {trips.planet}</p>
                <p><strong>Data:</strong><br /> {trips.date}</p>
                <p><strong>Duração:</strong><br /> {trips.durationInDays} dias.</p>
                <p><strong>Descrição:</strong><br /> {trips.description}</p>
                <ButtonStyled
                    variant={"contained"}
                    color={"primary"}
                    margin={'normal'}
                    onClick={() => { goBack(history) }}
                >
                    Voltar
                </ButtonStyled>
            </TextContainer>

            <ImageContainer>
                <img src={earth} alt="Imagem planeta terra" />
            </ImageContainer>
        </TripsContainer>
    )
}