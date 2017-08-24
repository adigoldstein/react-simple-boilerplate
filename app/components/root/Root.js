import React from 'react';
import axios from 'axios'

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {

      data : []

    }
  }


  componentDidMount() {
    axios.get(`http://time.jsontest.com/`)
      .then((res) => {
      console.info('res: ', res.data.time);
      this.setState({timeString : res.data.time})
      // const resData = res.data.array;
      //   console.info('res-data:' , resData);
      // this.setState({data: resData}, ()=> console.info(this.state.data))
      }).catch((e)=> alert(e));
  }
  render() {
    return (
      <div className="app">
        <div className="top-section">
          <div className="top-box">
            box
          </div>
          <div className="top-box">
            box
          </div>
          <div className="top-box">
            box
          </div>
        </div>

      </div>
    )
  }
}
