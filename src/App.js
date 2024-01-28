import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chats from './components/Chats';
import TinderCards from './components/TinderCards';
import ButtomButtons from './components/ButtomButtons';
import Footer from './components/Footer';
import User from './components/User';
import Likes from './components/Likes';
import Notification from './components/Notification';
import Settings from './components/Settings';
import Explore from './components/Explore';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/chat' element={<><Header /><Chats /> <Footer /></>} ></Route>
          <Route path='/' element={<><Header /><TinderCards />  <ButtomButtons /><Footer /></>} ></Route>
          <Route path='/explore' element={<><Header /><Footer /></>}></Route>
          <Route path='/likes' element={<><Header /><Likes /><Footer /></>}></Route>
          <Route path='/user' element={<><Header /><User /><Footer /> </>}></Route>
          <Route path='/settings' element={<><Header /><Settings /></>}></Route>
          <Route path='/notification' element={<><Header /><Notification /></>}></Route>
          <Route path='/explore' element={<><Header /><Explore /><Footer /></>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

