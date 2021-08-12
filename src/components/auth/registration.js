import React, { useState } from 'react'
import { Button, FormControl, Paper, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registration } from "../../redux/profile/profile-actions";

export default function Registration() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleSubmitForm = (event) => {
        event.preventDefault()
        dispatch(registration(email, password))
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
                Регистрация
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
                    Регистрация
                </Button>
            </form>
            <Link to="/login">
                Войти на сайт
            </Link>
        </Paper>
    )
}