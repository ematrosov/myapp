import {
    Avatar,
    FormControl,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    makeStyles,
    Paper,
    TextField,
    Typography
} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addChat, removeChat } from "../redux/chats/chats-actions";
import { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

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
    const dispatch = useDispatch()
    const chatList = useSelector(state => state.chats)
    const [newChatName, setNewChatName] = useState('')

    const handleInputChange = (event) => {
        setNewChatName(event.target.value)
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        dispatch(addChat(newChatName))
    }

    const handleDeleteButtonCLick = (chatId) => {
        dispatch(removeChat(chatId))
    }


    return (
        <Paper elevation={10} className={classes.root}>
            <Typography variant="h5">
                Ваши контакты
            </Typography>

            <form onSubmit={handleSubmitForm}>
                <FormControl>
                    <TextField label="Название нового чата"
                        variant="outlined"
                        value={newChatName}
                        required
                        onChange={handleInputChange}
                    />
                </FormControl>
                <IconButton area-label='add' type='submit'>
                    <AddIcon color="primary" />
                </IconButton>
            </form>

            {
                chatList.map((chat) =>
                    <List key={chat.id}>
                        <ListItem selected={+props.chatId === chat.id}>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <Link to={'/chats/' + chat.id} className={classes.link}>
                                <ListItemText primary={chat.name} />
                            </Link>
                            <ListItemSecondaryAction>
                                <IconButton edge="end"
                                    aria-label="delete"
                                    id="111"
                                    onClick={() => handleDeleteButtonCLick(chat.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                )
            }
        </Paper>
    )
}