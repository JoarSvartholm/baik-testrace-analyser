import React, {Component} from 'react';

export class SelectTrack extends Component {

  render(){
    return(
      <div className="EntryHolder"> Bana:
      <select value={this.props.option} onChange={this.props.onChange.bind(this)}>
        <option value='ormberget'>Ormberget</option>
        <option value='mattsund'>Måttsund</option>
      </select>
      </div>

    )
  }
}
