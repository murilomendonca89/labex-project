import React from 'react'
import { HomeContainer } from './styled'
import { useProtectedPage } from '../../hooks/useProtectedPage'

export const HomePage = () => {
    useProtectedPage()

    return (
        <HomeContainer>
            home page
        </HomeContainer>
    )
}