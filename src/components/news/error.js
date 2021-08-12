import React from 'react'
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";

export default function Error() {
    return (
        <Card>
            <CardHeader title='Ошибка загрузки данных' />
            <CardContent>
                <Typography variant="body2" color="textPrimary">
                    Попробуйте загрузить данные позже
                </Typography>
            </CardContent>
        </Card>
    )
}