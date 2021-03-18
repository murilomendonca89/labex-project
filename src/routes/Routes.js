import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { HomePage } from '../pages/HomePage/HomePage'
import { SignupPage } from '../pages/SignupPage/SignupPage'
import { ApplicationPage } from '../pages/ApplicationPage/ApplicationPage'
import { TripsPage } from '../pages/TripsPage/TripsPage'

export const Router = ({ setChangeButton }) => {
    return (
        <Switch>
            <Route exact path={"/login"}>
                <LoginPage
                    setChangeButton={setChangeButton}
                />
            </Route>

            <Route exact path={"/signup"}>
                <SignupPage
                    setChangeButton={setChangeButton}
                />
            </Route>

            <Route exact path={"/"}>
                <HomePage />
            </Route>

            <Route exact path={"/cadastro"}>
                <ApplicationPage />
            </Route>

            <Route exact path={"/viagens"}>
                <TripsPage />
            </Route>

        </Switch>
    )
}