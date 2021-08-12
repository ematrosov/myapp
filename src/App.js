import Chat from './components/chat'
import ChatsList from "./components/chats-list";
import { Box, createTheme, makeStyles, MuiThemeProvider } from "@material-ui/core";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  App: {

  }
})
function App() {
  const { chatId } = useParams();
  const classes = useStyles();
  const darkTheme = createTheme({
    palette: {
      type: 'light'
    }
  })

  //const defaultChatsListValue = [
  //  { name: 'Bot', id: '1' },
  //  { name: 'Egor', id: '2' },
  //  { name: 'Anna', id: '3' },
  //  { name: 'Jenj', id: '4' }
  //]

  // const [chatList] = useState(defaultChatsListValue)
  const chatList = useSelector(state => state.chats)

  const currentChat = chatList.find((chat) => {
    // return chat.id === chatId ? true : false

    return chat.id === chatId
  })
  return (
    <MuiThemeProvider theme={darkTheme} >
      <Box className={classes.App}>
        <ChatsList chatId={chatId} />
        {currentChat && <Chat currentChat={currentChat} />}
        <Chat />
      </Box>
    </MuiThemeProvider >
  )

}
export default App;


