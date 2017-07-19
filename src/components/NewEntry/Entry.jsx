import React from 'react';
import './Entry.css';
import TimeInput from 'react-time-input';



export class Entry extends React.Component{
  constructor(){
    super();
    this.state = {
      value: '00:00'
  }
  this.onTimeChangeHandler = this.onTimeChangeHandler.bind(this);
  }
  changeState(e){
    this.setState({
      value: e.target.value
    })
  }
  onTimeChangeHandler(val){
    this.setState({
      value: val
    })
}
  render(){
    return(
      <div className="EntryHolder">

        {this.props.checkpoint} :
        <TimeInput  mountFocus='true'
   			onTimeChange={this.onTimeChangeHandler}  />


        <div className="foundEntry">{this.state.value}</div>

      </div>
    )
  }
}
