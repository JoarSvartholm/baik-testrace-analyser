import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export class DatePick extends React.Component {
  render() {
    return (
        <div className="EntryHolder">
          Datum :
      <div className="TimeInputHolder"> <DatePicker
        selected={this.props.startDate}
        onChange={this.props.onChange.bind(this)}
        dateFormat='LL'
    /></div>
</div>
)
  }
}
