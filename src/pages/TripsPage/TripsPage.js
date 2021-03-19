import React from 'react'
import { TripsContainer, ImageContainer, TextContainer } from './styled'
import { useTripsList } from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import foguete from '../../assets/img/rocket.jpg'
import { useProtectedPage } from '../../hooks/useProtectedPage'

export const TripsPage = () => {
    const history = useHistory();
    const trips = useTripsList() || [];
    useProtectedPage();

    const goToTripDetails = (tripId) => {
        history.push(`/trips/${tripId}`)
    }

    return (
        <TripsContainer>
            <ImageContainer>
                <img src={foguete} alt="Imagem foguete" />
            </ImageContainer>
            <TextContainer>
                <h2>Escolha sua viagem</h2>
                {trips.map((trip) => {
                    return <p onClick={() => { goToTripDetails(trip.id) }}>{trip.name}</p>
                })}
            </TextContainer>
        </TripsContainer>



    )
}