import React, { useState, useRef, useEffect } from 'react';
import generateMessage, { Message, Priority } from './Api';
import Header from './components/Header';
import ActionButtons from './components/ActionButtons';
import MessageList from './components/MessageList';
import ErrorNotification from './components/ErrorNotification';

const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  let subscription = useRef(() => {});
  let [errorNotifcation, setErrorNotification] = useState<String|null>(null);

  useEffect(() => {
    let cleanup = generateMessage((message: Message) => {
      setMessages(oldMessages => [message, ...oldMessages, ]);
      if(message.priority === Priority.Error) {
        setErrorNotification(message.message);
      }
    });
    subscription.current = cleanup;
    return cleanup;
  }, [setMessages]);

  const clearMessage = (index: Number): void => {
    setMessages((messages) => {
      return messages.filter((message, i) => {
        return i !== index;
      });
    });
  };

  const clearAllMessages = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setMessages([]);
  }

  const stopIncomingMessages = (event: React.MouseEvent<HTMLButtonElement>) : void => {
    subscription.current();
  }

  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <div>
      <Header />
      <ActionButtons clearAllMessages={clearAllMessages} stopIncomingMessages={stopIncomingMessages} />
      <MessageList messages={messages} clearMessage={clearMessage} />
      <ErrorNotification message={errorNotifcation} />
    </div>
    </>
  );
}

export default App;
