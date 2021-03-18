import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { HomePage } from '../pages/HomePage/HomePage'
import { SignupPage } from '../pages/SignupPage/SignupPage'

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

        </Switch>
    )
}