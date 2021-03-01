import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

import { projectID, userName, john, userSecret } from './constants';

const App: React.FC = () => (
  <ChatEngine
    height="100vh"
    projectID={projectID}
    userName={userName}
    userSecret={userSecret}
    renderChatFeed={(chatAppProps: any) => <ChatFeed {...chatAppProps} />}
  />
);

export default App;
