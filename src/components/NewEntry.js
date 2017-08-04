import React from 'react';
import Moment from 'moment';
//import * as firebase from 'firebase';


//components
import {Entry} from './NewEntry/Entry';
import {SelectTrack} from './SelectTrack';
import {DatePick} from './NewEntry/Date';


export class NewEntry extends React.Component{
  constructor(){
    super();
/*    const mattsundRef = firebase.database().ref().child('mattsund');
    console.log(mattsundRef)*/
    this.state={
      option: 'ormberget',
      cpts: 8,
      date: Moment()
    }
  }
  trackChange(e){
    this.setState({
      option: e.target.value
    })
    if (e.target.value === 'ormberget'){
      this.setState({
        cpts: 8
      })
    }
    else {
      this.setState({
        cpts: 3
      })
    }
  }
  dateChange(e){
    this.setState({
      date: e
    })
    console.log(this.state.date._d)

  }
  render(){
    var inputs = []
    for (var i=1; i <= this.state.cpts; i++) {
    inputs.push(<Entry checkpoint={i} key={i.toString()} />);
}
    return(
      <div>

        <h1>Lägg till nytt test</h1>
        <div>
          <SelectTrack option={this.state.option} onChange ={this.trackChange.bind(this)} />
          <DatePick onChange={this.dateChange.bind(this)} startDate={this.state.date}  />

          {inputs}

        </div>
      </div>
    )
  }
}
