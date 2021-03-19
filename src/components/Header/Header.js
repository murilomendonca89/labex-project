import React from 'react'
import { useHistory } from 'react-router'
import logo from '../../assets/img/logo_min.png'
import { AppBar } from '@material-ui/core'
import { StyledToolBar, StyledButton } from './styled'
import { goToApplicationFormPage, goToHomePage, goToLogin, goToTripsPage } from '../../routes/coordinator'

export const Header = ({ changeButton, setChangeButton }) => {
    const history = useHistory()
    const token = localStorage.getItem("token")

    const logout = () => {
        localStorage.removeItem("token")
    }

    const changeButtonLogout = () => {
        if (token) {
            logout()
            setChangeButton("Login")
            goToLogin(history)
        } else {
            goToLogin(history)
        }
    }
    return (
        <AppBar color="inherit">
            <StyledToolBar>
                <img src={logo} width="120px" alt="logo" />
                <StyledButton
                    color="primary"
                    onClick={() => goToHomePage(history)}
                >
                    Inicio
                </StyledButton>

                <StyledButton color="primary"
                    onClick={() => goToTripsPage(history)}
                >
                    Viagens
                </StyledButton>
                <StyledButton color="primary"
                    onClick={() => goToApplicationFormPage(history)}
                >
                    Inscreva-se
                </StyledButton>
                <StyledButton
                    color="primary"
                    onClick={changeButtonLogout}
                >
                    {changeButton}
                </StyledButton>
            </StyledToolBar>
        </AppBar >
    )
}
