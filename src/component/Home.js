import axios from "axios";
import React, { Component } from "react";
import CardApi from "./CardApi";
const url = process.env.REACT_APP_URL;
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      ShowCard: false,
    };
  }

  componentDidMount = async () => {
    const apiReq = await axios.get(`${url}/apiData`);
    this.setState({
      apiData: apiReq.data,
      ShowCard: true,
    });
    console.log(this.state.apiData);
  };

  addtofav = async (obj) => {
    await axios.post(`${url}/postmethod`, obj);
    console.log(obj);
  };
  render() {
    return (
      <div>
        {this.state.ShowCard && (
          <CardApi apiData={this.state.apiData} addtofav={this.addtofav} />
        )}
      </div>
    );
  }
}

export default Home;
