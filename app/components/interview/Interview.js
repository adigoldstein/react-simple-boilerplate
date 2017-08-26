import React from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './interview.css'

export default class Interview extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  newInterview() {
    if (this.props.interview.new) {
      return <span className="interview-new">NEW</span>
    }
  }

  render() {
    return (
      <div className="interview-container">
        <div className="interview-details ">
          <img className="env-img" src="../../assets/images/env.png" alt=""/>
          <div className="text-section">
            <div className="interview-text-holder">
              <span>{this.props.interview.title}</span>
              <span className="interview-status">{this.props.interview.status} <span
                className="interview-date"> {this.props.interview.date} {this.newInterview()}</span></span>
            </div>
            <span className="interview-body">{this.props.interview.body}</span>
            <span className="more-link">more</span>
          </div>
        </div>
        <div className="tell-us-and-schedule">
          <div className="tell-us-section">
            <div className="tell-us-text">Tell us about your Codex recruiting process</div>
            <span className="tell-us-arr"> > </span>
          </div>
          <div className="schedule-section">
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              placeholderText="Schedule date?"
              className="date-picker"
            />
            <img className="calendar-icon" src="../../assets/images/cal.png" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}
