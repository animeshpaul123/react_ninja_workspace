import React from 'react'
import { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AuthContext } from '../Reducers/AuthProvider'

export default function PrivateRoute(props) {
    const { isAuthenticated } = useContext(AuthContext)
    if (!isAuthenticated) {
        return <Redirect to="/login" />
    }
    return (
        <Switch>
            <Route {...props} />
        </Switch>
    )
}
