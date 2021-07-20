import Chat from './components/chat'
import ChatsList from "./components/chats-list";
import { Box, createTheme, makeStyles, MuiThemeProvider } from "@material-ui/core";

const useStyles = makeStyles({
  App: {
    textAlign: 'center',
    display: "flex",
    flexDirection: 'row'
  }
})
function App() {
  const classes = useStyles();
  const darkTheme = createTheme({
    palette: {
      type: 'light'
    }
  })
  return (
    <MuiThemeProvider theme={darkTheme} >
      <Box className={classes.App}>
        <ChatsList />
        <Chat />
      </Box>
    </MuiThemeProvider >
  )

}
export default App;


