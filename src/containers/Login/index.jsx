import { api } from '../../API/api'
import { useContext, useEffect, useState } from 'react'
import { useForm } from '../../hooks'
import { Form, Button } from 'react-bootstrap'
import Bar from '../../components/Bar'
import Input from '../../components/Input'
import { AuthContext } from '../../Reducers/AuthProvider'
import { LOGIN_SUCCESS } from '../../Reducers/AuthReducer'
import { useHistory } from 'react-router-dom'
import Logo from '../../components/Logo'
import './style.scss'

const Login = ({ afterLoginOps }) => {
    const [register, handleSubmit] = useForm({ inputFields: 2 })
    const { isAuthenticated, dispatch } = useContext(AuthContext)
    const [serverError, setserverError] = useState("")
    const [loading, setloading] = useState(false)
    const history = useHistory()

    useEffect(() => {
        if (isAuthenticated) {
            history.push("/")
        }
        // eslint-disable-next-line
    }, [isAuthenticated])

    const onSubmit = async formdata => {
        setserverError("")
        setloading(true)
        try {
            debugger
            const { data } = await api.login({ data: formdata })

            dispatch({ type: LOGIN_SUCCESS, payload: { data } })
            setloading(false)
        } catch (error) {
            setserverError(error?.response?.data?.error || "Something went wrong")
            setloading(false)
        }
    }

    return (
        <div className="login-wrapper">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-center align-items-center form-row w-100">
                    <div className="form-card">


                        <Logo />
                        <Bar message="sign in using email" />


                        <Input label="Email Address" placeholder="user@gmail.com" type="text" {...register('email')} />
                        <Input label="Enter Password" placeholder="Enter your password" type="password" {...register('password')} />

                        <Form.Group controlId="formFile" className="mb-3">
                            <Button onClick={handleSubmit(onSubmit)} disabled={loading}>Sign in</Button>
                        </Form.Group>
                        {serverError && <p className="error">{serverError}</p>}
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default Login