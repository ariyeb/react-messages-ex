import { useEffect, useState } from 'react';
import './App.css';
import { getMessages, postMessage } from './server/messages';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages().then(newMessages => {
      setMessages(newMessages);
    });
  }, []);

  const onSubmitMessage = (event) => {
    event.preventDefault();
    const title = event.target.children[0].value;
    const body = event.target.children[1].value;
    // console.log(title, body);
    postMessage(title, body)
      .then(() => {
        return getMessages();
      })
      .then((newMessages) => {
        setMessages(newMessages);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Messages</h1>
      <form onSubmit={ onSubmitMessage }>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="body" />
        <button type="submit">Submit</button>
      </form>
      {
        messages.map(message => (
          <div key={ message._id }>
            <h3>{ message.title }</h3>
            <h4>{ message.body }</h4>
          </div>
        ))
      }
    </div>
  );
}

export default App;
