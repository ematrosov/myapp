import { Link } from "react-router-dom";
import { ListItem, List, ListItemText, ListItemAvatar, Avatar, Paper, makeStyles, Typography } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles({
    root: {
        minWidth: "30%",
        height: "100vh"
    },
    link: {
        textDecoration: "none"
    }
})

export default function ChatsList(props) {
    const classes = useStyles();



    <Paper elevation={10} className={classes.root}>
        <Typography variant="h5">
            Контакты
        </Typography>
        {
            props.chatList.map((chat) =>
                <List key={chat.id}>

                    <Link to={'/chat/' + chat.id} className={classes.link}>
                        <ListItem selected={props.chatId === chat.id}>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={chat.name} />
                        </ListItem>
                    </Link>
                </List>
            )
        }
    </Paper>

}
