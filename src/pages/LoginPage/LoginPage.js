import React from 'react'
import { LoginContainer, LogoContainer, InputsContainer } from './styled'
import logo from '../../assets/img/logo_min.png'
import { TextField, Button } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { goToSignup } from '../../routes/coordinator'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'
import { useUnProtectedPage } from '../../hooks/useUnprotectedPage'

export const LoginPage = ({ setChangeButton }) => {
    useUnProtectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(
            form,
            clear,
            history,
            setChangeButton
        )
    }

    return (
        <LoginContainer>
            <LogoContainer src={logo} alt="logo" />

            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        type={"email"}
                        variant={"outlined"}
                        fullWidth
                        margin={'normal'}
                        color={"primary"}
                        required
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        type={"password"}
                        variant={"outlined"}
                        fullWidth
                        margin={'normal'}
                        color={"primary"}
                        required
                    />

                    <Button
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        onClick={onSubmitForm}
                        margin={'normal'}
                    >
                        Entrar
                    </Button>

                    <Button
                        variant={"text"}
                        color={"primary"}
                        margin={'normal'}
                        fullWidth
                        onClick={goToSignup}
                    >
                        Criar conta
                    </Button>
                </form>
            </InputsContainer>
        </LoginContainer>
    )
}