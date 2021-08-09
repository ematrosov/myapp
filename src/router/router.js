import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Profile from "../components/profile";
import App from "../App";
import News from "../components/news/index";


export default function Router() {
    return <Switch>
        <Route path="/" exact>
            <Link to="/chats">Чаты</Link>
            <Link to="/profile">Профиль</Link>
            <Link to="/news">News</Link>
        </Route>

        <Route path="/profile">
            <Profile />
        </Route>

        <Route path="/chats/:chatId?">
            <App />
        </Route>

        <Route path="/news">
            <News />
        </Route>
    </Switch>
}


