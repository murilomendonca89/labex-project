import React from 'react'
import { useHistory } from "react-router-dom";
import { SignupContainer, InputsContainer } from './styled'
import { TextField, Button } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { signup } from '../../services/user'
import { goToLogin } from '../../routes/coordinator'
import { useUnProtectedPage } from '../../hooks/useUnprotectedPage'

export const SignupPage = (setChangeButton) => {
    useUnProtectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        signup(
            form,
            clear,
            history,
            setChangeButton
        )
    }

    return (
        <SignupContainer>
            <InputsContainer>
                <h1>Faça seu Cadastro</h1>
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
                        Cadastrar
                    </Button>

                    <Button
                        variant={"text"}
                        color={"primary"}
                        margin={'normal'}
                        onClick={() => { goToLogin(history) }}
                        fullWidth
                    >
                        Já tem conta? Faça seu Login.
                    </Button>
                </form>
            </InputsContainer>
        </SignupContainer>
    )
}