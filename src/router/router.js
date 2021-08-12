import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Profile from "../components/profile";
import App from "../App";
import News from "../components/news/index";
import { useSelector } from "react-redux";
import Login from "../components/auth/login";
import Registration from "../components/auth/registration";

const PrivateRoute = (props) => {
    const isAuthed = useSelector(state => state.profile.isAuthed)

    return isAuthed ? <Route {...props} /> : <Redirect to="/login" />
}


export default function Router() {
    return <Switch>
        <Route path="/" exact>
            <Link to="/chats">Чаты</Link>
            <Link to="/profile">Профиль</Link>
            <Link to="/news">News</Link>
        </Route>

        <PrivateRoute path="/profile">
            <Profile />
        </PrivateRoute>

        <PrivateRoute path="/chats/:chatId?">
            <App />
        </PrivateRoute>

        <Route path="/news">
            <News />
        </Route>

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/registration">
            <Registration />
        </Route>
    </Switch>
}


