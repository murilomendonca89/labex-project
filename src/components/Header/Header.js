import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/img/logo_min.png'
import { AppBar, Button } from '@material-ui/core'
import { StyledToolBar } from './styled'
import { goToHomePage, goToLogin } from '../../routes/coordinator'

export const Header = ({ changeButton, setChangeButton }) => {
    const history = useHistory();
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
                <Button
                    color="primary"
                    onClick={() => goToHomePage(history)}
                >
                    Inicio
                </Button>

                <Button color="primary">
                    Viagens
                </Button>
                <Button color="primary">
                    Cadastro
                </Button>
                <Button
                    color="primary"
                    onClick={changeButtonLogout}
                >
                    {changeButton}
                </Button>
            </StyledToolBar>
        </AppBar >
    )
}
