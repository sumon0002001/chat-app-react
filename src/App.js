import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

function App() {
  return (
     <ChatEngine
          height = "100vh"
          projectID = "dfe1eda2-e7be-4eea-b8f5-37143e7c06d9"
          userName = "sumon0002016"
          userSecret = "12345678"
          renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />

  
  );
}

export default App;
