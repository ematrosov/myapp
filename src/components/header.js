import React, { useEffect } from 'react'
import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initAuthStateTracking, loggedOut } from "../redux/profile/profile-actions";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    link: {
        color: 'white',
        textDecoration: 'none'
    }
}))

export default function Header() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { isAuthed } = useSelector(state => state.profile)

    const handleLogOut = () => {
        dispatch(loggedOut())
    }

    useEffect(() => {
        dispatch(initAuthStateTracking())
    }, [dispatch])

    return (
        <AppBar position="static">
            <Toolbar>
                <Link to="/news" className={classes.link}>
                    <Button color="inherit">
                        Новости
                    </Button>
                </Link>
                {
                    isAuthed &&
                    <div>
                        <Link to="/chats" className={classes.link}>
                            <Button color="inherit">
                                Чат
                            </Button>
                        </Link>
                        <Link to="/profile" className={classes.link}>
                            <Button color="inherit">
                                Профиль
                            </Button>
                        </Link>
                        <Button color="inherit" onClick={handleLogOut}>
                            Выйти
                        </Button>
                    </div>
                }
                {
                    !isAuthed &&
                    <Link to="/login" className={classes.link}>
                        <Button color="inherit">
                            Войти
                        </Button>
                    </Link>
                }
            </Toolbar>
        </AppBar>
    )
}