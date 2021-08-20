import React from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import Home from '../../containers/Home'
import Header from '../../containers/Header'
import './style.scss'

export default function Layout() {
    const path = useRouteMatch()
    return (
        <div className="layout">
            {/* <TheSidebar /> */}
            <div className="main-wrapper">
                <Header />
                <div className="main-body">
                    {/* main body should go here, but as we have only Home page I am directly using home page */}
                    {/* <TheContent />   */}
                    <Switch>
                        <Route path={`${path}/home`} name="Home Page" render={props => <Home {...props} />} />
                        <Redirect from="/" to="/home" />
                    </Switch>
                    <Home />
                </div>
                {/* <TheFooter /> */}
            </div>
        </div>
    )
}
