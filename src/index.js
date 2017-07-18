import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,
   Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

//components
import {Root} from './components/Root';

//firebase
import * as firebase from 'firebase';
import config from './auth';
firebase.initializeApp(config);



class App extends React.Component {
  
  render() {
    return (
      <Router >
          <Route path="/" component={Root} />
    </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
