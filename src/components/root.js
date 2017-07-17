import React from 'react';
import {Route} from 'react-router-dom';
import {Header} from "./Header";


import {Home} from './Home';
import {User} from './User';

export class Root extends React.Component {
  render(){
    return(
    <div className="container">
      <Header />
      <hr />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/home" component={Home} />
      </div>
    </div>
  )
  }
}
