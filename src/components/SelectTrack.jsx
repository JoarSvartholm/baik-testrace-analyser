import React, {Component} from 'react';

export class SelectTrack extends Component {
  constructor(){
    super()
    this.state={
      option: 'ormberget'
    }
  }
  handleChange(e){
    this.setState({
      option: e.target.value
    })
  }
  render(){
    return(
      <div className="EntryHolder"> Bana:
      <select value={this.state.option} onChange={this.handleChange.bind(this)}>
        <option value='ormberget'>ormberget</option>
        <option value='mattsund'>Måttsund</option>
      </select>
      </div>
    )
  }
}
