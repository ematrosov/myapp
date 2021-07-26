import Message from "./message";
import { useCallback, useEffect, useRef, useState } from "react";
import { Box, FormControl, Grid, IconButton, makeStyles, Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";


const useStyles = makeStyles({
    root: {
        minWidth: "70%",
        padding: "0 20px",
        boxSizing: "border-box"
    },
    chatContainer: {
        height: "80vh",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        marginBottom: 20
    },
    input: {
        minWidth: "80%"
    }
})
export default function Chat(props) {
    const classes = useStyles();
    const [messageList, setMessageList] = useState([]);
    const [id, setId] = useState(1)
    const [currentUser] = useState('Egor Matrosov')
    const messageContainerRef = useRef(null);
    const inputRef = useRef(null);
    const [currentMessage, setCurrentMessage] = useState('')

    const addMessage = useCallback((text, author) => {
        const msg = {
            id: id,
            author: author,
            text: text
        }
        setMessageList((prevMessageList) => {
            return prevMessageList.concat(msg);
        });
        setId((oldId) => oldId + 1);
    }, [id]);

    const robotAnswer = () => {
        if (messageList.length > 0 && messageList[messageList.length - 1].author !== props.currentChat.name) {
            const robotMessage = 'Еще'
            setTimeout(() => addMessage(robotMessage, props.currentChat.name), 1500)
        }
    }
    useEffect(() => {
        return () => {
            setMessageList([])
        };
    }, [props.currentChat.name]);
    const handleInputChange = (event) => {
        setCurrentMessage(event.target.value)
    }
    const handleSubmitForm = (event) => {
        event.preventDefault();
        addMessage(currentMessage, currentUser)
        setCurrentMessage('')
    }

    useEffect(robotAnswer, [messageList, addMessage, props.currentChat])
    useEffect(() => {
        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        inputRef.current.focus()
    }, [messageList])

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" ></Typography>
            {props.currentChat.name}

            <Box className={classes.chatContainer} ref={messageContainerRef}>
                <Grid container direction="column" >
                    {
                        messageList.map((message) =>
                            <Message key={message.id}
                                text={message.text}
                                author={message.author}
                                fromCurrentUser={message.author === currentUser} />)
                    }
                </Grid>
            </Box>
            <form onSubmit={handleSubmitForm} >
                <FormControl className={classes.input}>
                    <TextField label="сообщение"
                        id='text-field'
                        multiline
                        rows={3}
                        variant="outlined"
                        value={currentMessage}
                        onChange={handleInputChange}
                        autoFocus
                        required
                        inputRef={inputRef}
                    />
                </FormControl>
                <IconButton area-label='send' type={"submit"}>
                    <SendIcon color="primary" />
                </IconButton>
            </form>
        </Paper>
    );
}