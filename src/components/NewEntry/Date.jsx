import React from 'react';
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export class DatePick extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: Moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return <div className="EntryHolder"> Datum:<DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        dateFormat='LL'
    /></div>;
  }
}
