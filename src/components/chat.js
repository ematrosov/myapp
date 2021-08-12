import Message from "./message";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Box, FormControl, Grid, IconButton, makeStyles, Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import { useDispatch, useSelector } from "react-redux";
import { getMessagesByChatId } from "../redux/messages/selectors";
import { addMessageWithThunk } from "../redux/messages/messages-actions";


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
    //const [messageList, setMessageList] = useState([]);
    //const [id, setId] = useState(1)
    //const [currentUser] = useState('Egor Matrosov')
    const getSelectedMessages = useMemo(() => getMessagesByChatId(props.currentChat.id), [props.currentChat.id])
    const messageListFromStore = useSelector(getSelectedMessages)
    const dispatch = useDispatch()

    const messageContainerRef = useRef(null);
    const inputRef = useRef(null);
    const [currentMessage, setCurrentMessage] = useState('')

    //const addMessage = useCallback((text, author) => {
    const addMessage = useCallback((text, currentUserFlag) => {
        const msg = {

            id: +Date.now(),
            chatId: +props.currentChat.id,
            currentUser: currentUserFlag,
            text: text

        }
        dispatch(addMessageWithThun(msg))
    }, [props.currentChat, dispatch]);




    const handleInputChange = (event) => {
        setCurrentMessage(event.target.value)
    }
    const handleSubmitForm = (event) => {
        event.preventDefault();
        //addMessage(currentMessage, currentUser)
        addMessage(currentMessage, true)
        setCurrentMessage('')
    }



    useEffect(() => {
        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        inputRef.current.focus()

    }, [messageListFromStore])


    return (
        <Paper className={classes.root}>
            <Typography variant="h5">
                {props.currentChat.name}
            </Typography>
            <Box className={classes.chatContainer} ref={messageContainerRef}>
                <Grid container direction="column" >
                    {

                        messageListFromStore.map((message) =>
                            <Message key={message.id}
                                text={message.text}
                                fromCurrentUser={message.currentUser} />)
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