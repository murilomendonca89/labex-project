import React, { useState } from 'react'
import theme from './constants/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { Router } from './routes/Routes'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

export const App = () => {
  const token = localStorage.getItem("token")
  const [changeButton, setChangeButton] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          changeButton={changeButton}
          setChangeButton={setChangeButton}
        />
        <Router
          setChangeButton={setChangeButton}
        />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}
