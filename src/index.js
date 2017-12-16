import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import Footer from './components/Footer';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history'
import registerServiceWorker from './registerServiceWorker';
import Callback from './components/Callback';
import { requireAuth } from './utils/AuthService';

const Root = () => {
  return (
    <div className="container-fluid">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={FoodJokes}/>
          <Route path="/special" component={CelebrityJokes} onEnter={requireAuth}/>
          <Route path="/callback" component={Callback} />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
