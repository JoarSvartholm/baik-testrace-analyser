import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export class DatePick extends React.Component {
  render() {
    return (
        <div className="EntryHolder">
          Datum :
      <div className="DateInputHolder"> <DatePicker
        selected={this.props.startDate}
        onChange={this.props.onChange.bind(this)}
        dateFormat='YYYY-MM-DD'
        isClearable={true}
        withPortal
    /></div>
</div>
)
  }
}
