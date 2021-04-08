
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
const App = () => {
    return (
        < ChatEngine 
            height = "100vh"
            projectID="a9ab3f82-486a-42f1-823e-07987f254470"
            userName="Alina"
            userSecret="QwAsZx"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App
