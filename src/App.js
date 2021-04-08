
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed';
import './App.css';
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        < ChatEngine 
            height = "100vh"
            projectID="a9ab3f82-486a-42f1-823e-07987f254470"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App
