import React from 'react'
import { useHistory } from "react-router-dom";
import { useForm } from '../../hooks/useForm'
import { ApplicationContainer, TextContainer, ImageContainer } from './styled'
import { TextField, Button } from '@material-ui/core'
import astronaut from '../../assets/img/astronaut.jpg'
import { application } from '../../services/user'
import { useProtectedPage } from '../../hooks/useProtectedPage'


export const ApplicationPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm(
        {
            name: "",
            age: "",
            applicationText: "",
            profession: "",
            country: ""
        })

    const onSubmitForm = (event) => {
        event.preventDefault()
        application(
            form,
            clear,
            history
        )
    }

    return (
        <ApplicationContainer>
            <ImageContainer>
                <img src={astronaut} alt="Imagem astronauta" />
            </ImageContainer>
            <TextContainer>
                <h2>Inscreva-se</h2>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"}
                        type={"name"}
                        variant={"outlined"}
                        fullWidth
                        margin={'normal'}
                        color={"primary"}
                        required
                    />
                    <TextField
                        name={"age"}
                        value={form.age}
                        onChange={onChange}
                        label={"Idade"}
                        type={"age"}
                        variant={"outlined"}
                        fullWidth
                        margin={'normal'}
                        color={"primary"}
                        required
                    />
                    <TextField
                        name={"applicationText"}
                        value={form.applicationText}
                        onChange={onChange}
                        label={"Por que gostaria de ir?"}
                        type={"text"}
                        variant={"outlined"}
                        fullWidth
                        margin={'normal'}
                        color={"primary"}
                        required
                    />
                    <TextField
                        name={"profession"}
                        value={form.profession}
                        onChange={onChange}
                        label={"Profissão"}
                        type={"text"}
                        variant={"outlined"}
                        fullWidth
                        margin={'normal'}
                        color={"primary"}
                        required
                    />
                    <TextField
                        name={"country"}
                        value={form.country}
                        onChange={onChange}
                        label={"País"}
                        type={"text"}
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
                        Enviar cadastro
                    </Button>
                </form>
            </TextContainer>
        </ApplicationContainer>



    )
}