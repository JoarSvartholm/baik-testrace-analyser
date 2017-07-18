import React from 'react';
import {Route} from 'react-router-dom';
import {Header} from "./Header";

//components
import {Home} from './Home';
import {NewEntry} from './NewEntry';
import {Analys} from './Analys';

export class Root extends React.Component {
  render(){
    return(
    <div className="container">
      <Header />
      <hr />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/newEntry" component={NewEntry} />
        <Route path="/Analys" component={Analys} />
      </div>
    </div>
  )
  }
}
