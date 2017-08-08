import React from 'react';
import './Entry.css';
import TimeInput from 'react-time-input';

import img from './checkImg.png'

export class Entry extends React.Component{
  constructor(){
    super();
    this.state = {
      value: '     '
  }
  this.onTimeChangeHandler = this.onTimeChangeHandler.bind(this);
  }

  onTimeChangeHandler(val){
    this.setState({
      value: val
    })
}

  render(){
    return(
      <div className="EntryHolder">

        Kontroll {this.props.checkpoint} :
        <TimeInput className='TimeInputHolder'  mountFocus='true'
   			onTimeChange={this.props.onChange.bind(this)}  />

      <div className="foundEntry">
        { this.props.done ? (
            <img style={{width: 20, height: 20}} src={img} alt='done' />
          ) : null }
      </div>

      </div>
    )
  }
}
