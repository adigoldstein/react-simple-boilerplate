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
          {/*<div className="sharethis-inline-share-buttons"></div>*/}
          <div  data-network="facebook" className="button share-button facebook-share-button">
            {/*<img className="share-img" src="../../assets/images/share.png" alt=""/>*/}
            shareeeee
          </div>
        </div>

      </div>

    )
  }
}
