import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import { Router, Route, Switch } from 'react-router';
import { createHashHistory } from 'history'
import registerServiceWorker from './registerServiceWorker';

const history = createHashHistory()

const Root = () => {
  return (
    <div className="container">
      <Router history={history}>
        <Switch>
          <Route path="/" component={FoodJokes}/>
          <Route path="/special" component={CelebrityJokes}/>
        </Switch>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
