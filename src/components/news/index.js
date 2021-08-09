import React from 'react'
import { Button, Paper, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { clearData, fetchNews, STATUS_ERROR, STATUS_IDLE, STATUS_LOADING } from "../../redux/news/news-actions";
import Error from "./error";
import Loading from "./loading";
import NewsList from "./newsList";

export default function News() {
    const { status, news } = useSelector((state) => state.news)
    const dispatch = useDispatch()

    const handleLoadData = () => {
        dispatch(fetchNews())
    }

    const handleClearData = () => {
        dispatch(clearData())
    }

    return (
        <Paper>
            <Typography variant='h1'>
                News
            </Typography>
            <Button variant='contained' onClick={handleLoadData}>
                Donwload
            </Button>
            <Button variant='contained' onClick={handleClearData}>
                Clear
            </Button>

            {status === STATUS_ERROR && <Error />}
            {status === STATUS_LOADING && <Loading />}
            {status === STATUS_IDLE && <NewsList news={news} />}

        </Paper>
    )
}