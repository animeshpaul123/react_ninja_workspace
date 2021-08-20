import React from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Logo from '../../components/Logo'
import { AuthContext } from '../../Reducers/AuthProvider'
import { LOGOUT } from '../../Reducers/AuthReducer'
import './style.scss'

export default function Header() {
    const { dispatch } = useContext(AuthContext)
    const history = useHistory()
    const onlogOut = () => {
        dispatch({ type: LOGOUT })
        history.push("/login")
    }
    return (
        <div className="common-header">
            <Logo />
            <div onClick={onlogOut}>Log out</div>
        </div>
    )
}
