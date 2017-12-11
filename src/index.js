import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import { Route, Switch } from 'react-router';
// import { HashRouter } from 'react-router-dom'; // for static sites with known files as in the tutorial
import { BrowserRouter } from 'react-router-dom'; // for use when we have a server with dynamic requests -- usually preferable
import { createHashHistory } from 'history'
import registerServiceWorker from './registerServiceWorker';
import Callback from './components/Callback';
import { requireAuth } from './utils/AuthService';

const history = createHashHistory()

const Root = () => {
  return (
    <div className="container">
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" component={FoodJokes}/>
          <Route path="/special" component={CelebrityJokes} onEnter={requireAuth}/>
          <Route path="/callback" component={Callback} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
