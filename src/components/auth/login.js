import React, { useState } from 'react'
import { Button, FormControl, Paper, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/profile/profile-actions";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleSubmitForm = (event) => {
        event.preventDefault()
        dispatch(login(email, password))
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return (
        <Paper>
            <Typography variant="h1">
                Вход на сайт
            </Typography>
            <form onSubmit={handleSubmitForm}>
                <FormControl>
                    <TextField label="Email"
                        variant="outlined"
                        value={email}
                        required
                        onChange={handleEmailChange}
                    />
                </FormControl>
                <FormControl>
                    <TextField label="Password"
                        variant="outlined"
                        value={password}
                        required
                        type="password"
                        onChange={handlePasswordChange}
                    />
                </FormControl>
                <Button variant='contained' type="submit">
                    Войти
                </Button>
            </form>
            <Link to="/registration">
                Нет аккаунта? Регистрация
            </Link>
        </Paper>
    )
}