import React from 'react'

import './answer.css'


export default class Answer extends React.Component {
  constructor() {
    super();
  }

  newAnswer() {
    if (this.props.answer.new) {
      return <span className="answer-new">NEW</span>
    }
  }


  render() {
    return (
      <div className="answer-container">
        <div className="answer-details ">
          <img className="env-img" src="../../assets/images/env.png" alt=""/>
          <div>
            <div className="answer-text-holder">
              <span className="company">{this.props.answer.company}</span>
              <span>- {this.props.answer.title}</span>
            </div>
            <span className="answer-body">{this.props.answer.body}</span>
            <span className="answer-date"> {this.props.answer.date}</span>
            {this.newAnswer()}
          </div>
        </div>
        <div className="tell-us">
          <div className="tell-us-text">Tell us about your Codex recruiting process</div>
          <span className="tell-us-arr"> > </span>
        </div>
      </div>
    )
  }
}
