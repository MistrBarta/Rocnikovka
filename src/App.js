import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Skins from './components/Skins';
import Support from './components/Support';
import Login from './components/Login';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <Navbar />

      <Switch>

        <Route path="/" component={Home} exact>
          <Home />
        </Route>

        <Route path="/skins" component={Skins} exact>
          <Skins />
        </Route>

        <Route path="/support" component={Support} exact>
          <Support />
        </Route>

        <Route path="/login" component={Login} exact>
          <div className='page'>
            <Login />
          </div>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
