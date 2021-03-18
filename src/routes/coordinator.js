export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignup = (history) => {
    history.push("/signup")
}

export const goToHomePage = (history) => {
    history.push("/")
}

export const goToApplicationFormPage = (history) => {
    history.push("/cadastro")
}

export const goToTripsPage = (history) => {
    history.push("/viagens")
}

export const goBack = (history) => {
    history.goBack();
}