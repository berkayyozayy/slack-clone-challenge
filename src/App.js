import './App.css';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

// Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Switch>
            <Route path='/room/:roomId'>
              <Chat />
            </Route>
            <Route path='/'>
              <h2>Welcome Screen</h2>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
