import React from 'react';
import Moment from 'moment';
import * as firebase from 'firebase';




//components
import {Entry} from './NewEntry/Entry';
import {SelectTrack} from './SelectTrack';
import {DatePick} from './NewEntry/Date';
import {SelectUser} from './NewEntry/SelectUser';
import {Button} from './NewEntry/Button';


export class NewEntry extends React.Component{

  constructor(){
    super();
    this.state={
      user: 'Joar',
      option: 'ormberget',
      cpts: 8,
      date: Moment(),
      times: [],
      isTime: []
    }
  }
  userChange(e){
    this.setState({
      user: e.target.value
    })
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
    console.log(this.state.date)

  }

  timeChange(i,val){
    const temp = this.state.times;
    const isTime = this.state.isTime;
    temp[i] = this.timeToDecimal(val)
    isTime[i] = 1;
    this.setState({
      times: temp,
      isTime: isTime

    })
    console.log(this.state.times)
  }

  buttonClick(){
    firebase.database().ref().child('test').push({
      user: this.state.user,
      track: this.state.option,
      times: this.state.times
    })
    console.log(this.state.date)
  }

  timeToDecimal(t){
     t = t.split(':')
    return parseFloat(parseInt(t[0], 10) + parseInt(t[1], 10)/60);
  }


  render(){
    var inputs = []
    for (var i=1; i <= this.state.cpts; i++) {
    inputs.push(<Entry checkpoint={i}
      key={i.toString()}
      onChange={this.timeChange.bind(this,i)}
      done={this.state.isTime[i]}
       />);
     }
    return(
      <div>

        <h2>Lägg till nytt test</h2>
        <div>
          <SelectUser option={this.state.user} onChange={this.userChange.bind(this)}/>
          <SelectTrack option={this.state.option} onChange ={this.trackChange.bind(this)} />
          <DatePick onChange={this.dateChange.bind(this)} startDate={this.state.date}  />

          {inputs}

          <Button label='Spara' onClick={this.buttonClick.bind(this)} />

        </div>
      </div>
    )
  }
}
