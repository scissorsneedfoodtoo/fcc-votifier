import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import UserPolls from './components/UserPolls';
import Footer from './components/Footer';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history'
import registerServiceWorker from './registerServiceWorker';
import Callback from './components/Callback';
import { requireAuth } from './utils/AuthService';

const Root = () => {
  return (
    <div className="app site">
      <div className="site-content">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/special" component={UserPolls} onEnter={requireAuth}/>
            <Route path="/callback" component={Callback} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
