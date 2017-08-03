import React, {Component} from 'react';

export class SelectTrack extends Component {
  constructor(){
    super()
    this.state={
      option: 'ormberget',
      cpts: 8
    }
  }
  handleChange(e){

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
  render(){
    return(
      <div className="EntryHolder"> Bana:
      <select value={this.state.option} onChange={this.handleChange.bind(this)}>
        <option value='ormberget'>Ormberget</option>
        <option value='mattsund'>Måttsund</option>
      </select>
      </div>

    )
  }
}
