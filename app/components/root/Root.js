import React from 'react';
import axios from 'axios';


import './root.css';
import Answer from './../answer/Answer'
import Interview from './../interview/Interview'
import Job from '../job/Job'

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        newAnswers: [
          {
            id: 1,
            company: 'HP',
            title: 'Experienced Developer',
            body: "Congratulations! You're hired!",
            date: 'Today',
            new: true
          },
          {
            id: 2,
            company: 'Amdocs',
            title: 'Experienced Developer',
            body: "Congratulations! You're hired!",
            date: 'Today',
            new: false
          }
        ],
        interviews: [
          {
            id: 101,
            title: 'Experienced UX Architect',
            status: "You've been called for a first interview",
            date: 'Today',
            new: true,
            body: "Dear applicant, we received your resume trough the Codex system and we are glad to inform you that we wish to interview you, in the next few days..."
          },
          {
            id: 102,
            title: 'Experienced UX Architect',
            status: "You've been called for a first interview",
            date: 'Today',
            new: true,
            body: "Dear applicant, we received your resume trough the Codex system and we are glad to inform you that we wish to interview you, in the next few days..."
          },
          {
            id: 103,
            title: 'Experienced UX Architect',
            status: "You've been called for a first interview",
            date: 'Today',
            new: true,
            body: "Dear applicant, we received your resume trough the Codex system and we are glad to inform you that we wish to interview you, in the next few days..."
          }
        ],
        info: {
          recruitment: 'Liat Ben Zvi',
          favorites: 3,
          relevant: 25
        },
        jobs: [
          {
            id: 1000,
            title:'Entry Level Intellectual Property Attorney',
            body:'Danish fontina chedder halloumi. Croque monstueir everyone loves airedale the big',
            rank: 4.5
          },
          {
            id: 1001,
            title:'Staff Attorney',
            body:'Mascarpone who moved my cheese. Port-salut cheese and wine edam taleggio.',
            rank:4
          }
        ]
      }
    }
  }

  createAnswers() {
    return (
      this.state.user.newAnswers.map((answerObj) => {
        // console.info(answerObj);
        return <Answer key={answerObj.id}
                       answer={answerObj}
        />
      })
    )
  }

  createInterviews() {
    return(
      this.state.user.interviews.map((interviewObj) => {
        // console.info(interviewObj);
        return <Interview key={interviewObj.id}
                       interview={interviewObj}
        />
      })
    )
  }

  componentDidMount() {

    const that = this;
    axios.all([
      axios.get('http://time.jsontest.com/'),
      axios.get('http://ip.jsontest.com/'),
      axios.get('http://headers.jsontest.com/')
    ])
      .then(axios.spread(function resHandler(timeRes, ipRes, langRes) {
        const lang = langRes.data['Accept-Language'].slice(0,5);
        that.setState({
          timeMilisec: timeRes.data.milliseconds_since_epoch,
          ip: ipRes.data.ip,
          lang
        });
        setInterval(function(){
          that.setState({timeMilisec: that.state.timeMilisec + 1000})
          }, 1000);
      }));
  }

  timeHandler() {
    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    var today = new Date(this.state.timeMilisec);
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    return h + ":" + m + ":" + s;
  }

  longIpHandler(ip) {
    if (ip) {
      if (ip.length > 16) {

        return {fontSize: '1.2rem'}
      }
    }
  }


  render() {
    return (
      <div className="app">
        <div className="top-section">
          <div className="top-box">
            <div className="box-left">
              <span className="time">{this.timeHandler()}</span>
              <h2 className="box-header">Time</h2>
              <div className="box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            </div>
            <img className="box-img play-img" src="../../assets/images/play.png" alt=""/>
          </div>
          <div className="top-box">
            <div className="box-left">
              <span className="ip" style={this.longIpHandler(this.state.ip)}>{this.state.ip}</span>
              <h2 className="box-header">IP</h2>
              <div className="box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            </div>
            <img className="box-img ballon-img" src="../../assets/images/ballon.png" alt=""/>
          </div>
          <div className="top-box">
            <div className="box-left">
              <span className="lang">{this.state.lang}</span>
              <h2 className="box-header">Language</h2>
              <div className="box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            </div>
            <img className="box-img down-arr" src="../../assets/images/down-arr.png" alt=""/>
          </div>
        </div>

        <div className="main-section">
          <div className="left-column">
            <h3 className="answers-h3">Answers</h3>
            {this.createAnswers()}
            <h3 className="interviews-h3">Interviews</h3>
            {this.createInterviews()}
          </div>


          <div className="right-column">
            <div className="right-boxes recruitment-box">
              <img className="user-img" src="../../assets/images/user.png" alt=""/>
              <span className="recruitment-name">{this.state.user.info.recruitment}</span>
              <span className="recruitment-title">Your recruitment counsel</span>
              <img className="phone-img" src="../../assets/images/phone.png" alt=""/>
              <img className="email-img" src="../../assets/images/email.png" alt=""/>
            </div>

            <div className="right-boxes search-job-box">
              <h3 className="search-jobs-h3">Search Job Listing</h3>
              <span className="job-fav"><span className="fav-num">{this.state.user.info.favorites}</span> Favorites</span>
              <span className="job-relevant"><span className="rel-num">{this.state.user.info.relevant}</span> Relevant Jobs</span>
            </div>

            <div className="right-boxes jobs-list">
              <div className="jobs-header">
                <h2>Share Jobs Listing</h2>
                <img className="megaphone-img" src="../../assets/images/megaphone.png" alt=""/>
              </div>

              {this.state.user.jobs.map((jobObj)=>{
                // console.info(jobObj);
                return <Job key={jobObj.id}
                job={jobObj}
                />
              })}

            </div>
          </div>
        </div>

      </div>
    )
  }
}
