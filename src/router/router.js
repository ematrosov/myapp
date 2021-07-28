import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Profile from "../components/profile";
import App from "../App";


export default function Router() {
    return <Switch>
        <Route path="/" exact>
            <Link to="/chats">Чаты</Link>
            <Link to="/profile">Профиль</Link>
        </Route>

        <Route path="/profile">
            <Profile />
        </Route>

        <Route path="/chats/:chatId?">
            <App />
        </Route>
    </Switch>
}
