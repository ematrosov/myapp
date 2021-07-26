import { useState } from "react";
import { ListItem, List, ListItemText, ListItemAvatar, Avatar, Paper, makeStyles, Typography } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles({
    root: {
        minWidth: "30%",
        height: "100vh"
    }
})

export default function ChatsList() {
    const classes = useStyles();
    const defaultChatsListValue = [
        { name: 'Bot', id: 'bot' },
        { name: 'Egor', id: 'egor' },
        { name: 'Max', id: 'max' },
        { name: 'Pavel', id: 'pavel' }
    ]

    const [chatList] = useState(defaultChatsListValue)

    return (
        <Paper elevation={10} className={classes.root}>
            <Typography variant="h5">
                Контакты
            </Typography>
            {
                chatList.map((chat) =>
                    <List key={chat.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={chat.name}
                                secondary={chat.id} />
                        </ListItem>
                    </List>
                )
            }
        </Paper>
    )
}