import React from 'react';

export class Button extends React.Component{
  render(){
    return (
      <div className="EntryHolder">
        <button onClick={this.props.onClick.bind(this)} >{this.props.label}</button>
      </div>
    )
  }
}
