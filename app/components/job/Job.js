import React from 'react'

import './job.css'

export default class Job extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="job">
        <h4 className="job-title">{this.props.job.title}</h4>
        <div className="job-desc">{this.props.job.body}</div>
        <div className="job-footer">
          <div className="footer-left">
            <img className="star-img" src="../../assets/images/star.png" alt=""/>
            <span className="rank">{this.props.job.rank}</span>
          </div>



          <div data-network="sharethis" className="st-custom-button"><img className="share-img" src="../../assets/images/share.png" alt=""/></div>
        </div>

      </div>

    )
  }
}
