import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <Paper>
            <Typography variant="h1">
                Профиль
            </Typography>

            <Link to='/'>На главную</Link>
        </Paper>
    )
}