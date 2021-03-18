import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToHomePage } from '../routes/coordinator';

export const login = (form, clear, history, setChangeButton) => {
    axios.post(`${BASE_URL}/login`, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToHomePage(history)
            setChangeButton("Logout")
        })
        .catch((err) => console.error("Erro no login", err.response.data.message))
}

export const signup = (form, clear, history, setChangeButton) => {
    axios.post(`${BASE_URL}/signup`, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToHomePage(history)
            setChangeButton("Logout")
        })
        .catch((err) => console.error("Erro no cadastro", err.response.data.message))
}