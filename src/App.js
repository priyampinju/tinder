import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './components/Chats';
import TinderCards from './components/TinderCards';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/chat' element={<Chat />} />
          <Route path="/" element={<TinderCards />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

