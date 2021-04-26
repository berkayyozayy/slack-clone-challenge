import React from 'react'
import './App.css';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
            <>
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
            </>
          )}
      </Router>
    </div>
  );
}

export default App;
