import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import { Router, Route, Switch } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom'; // for static sites with known files as in the tutorial
// import { BrowserRouter } from 'react-router-dom'; // for use when we have a server with dynamic requests -- usually preferable
import history from './history'
import registerServiceWorker from './registerServiceWorker';
import Callback from './components/Callback';
import { requireAuth } from './utils/AuthService';

const Root = () => {
  return (
    <div className="container">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={FoodJokes}/>
          <Route path="/special" component={CelebrityJokes} onEnter={requireAuth}/>
          <Route path="/callback" component={Callback} />
        </Switch>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
