import './App.css';
import { useCallback, useEffect, useRef, useState } from "react";



function Message(props) {

  return <div className={props.fromCurrentUser ? 'message message__right' : 'message message__left'}>
    <p className="message_author">{props.fromCurrentUser ? 'Вы' : props.author}</p>
    <p className="message_item">{props.text}</p>

  </div>

}
function App() {
  const [messageList, setMessageList] = useState([]);
  const [id, setId] = useState(1)
  const [currentUser] = useState('Matrosov Egor')
  const [currentMessage, setCurrentMessage] = useState('')
  const messageContainerRef = useRef(null);

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

  const handleInputChange = (event) => {
    setCurrentMessage(event.target.value)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    addMessage(currentMessage, currentUser)
    setCurrentMessage('')
  }

  const robotAnswer = () => {
    if (messageList.length > 0 && messageList[messageList.length - 1].author !== 'Bot') {
      const robotMessage = 'Заполните еще раз'
      setTimeout(() => addMessage(robotMessage, 'Bot'), 1500)
    }
  }

  useEffect(robotAnswer, [messageList, addMessage])

  useEffect(() => {
    messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
  }, [messageList])

  return (
    <div className="App">

      <div className="message_container" ref={messageContainerRef}>
        {
          messageList.map((message) =>
            <Message key={message.id}
              text={message.text}
              author={message.author}
              fromCurrentUser={message.author === currentUser} />)
        }
      </div>
      <form onSubmit={handleSubmitForm} className="form_container">
        <textarea value={currentMessage} onChange={handleInputChange} className="form_input" />
        <input type="submit" value="Отправить" className="form_button" />
      </form>
    </div>
  );
}

// function App(props) {
//  return (
//    <div className="App">
//     <header className="App-header">
//       My First React App
//       <h3>Hello, {props.name}</h3>
//    </header>
//   </div>
// );//

export default App;


