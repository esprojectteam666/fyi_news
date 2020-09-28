import React, { Component } from "react";
//import {newsinfo, ticketsinfo, detailInfo, news } from '../data'
import axios from "axios";

const InfoContext = React.createContext();

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000'
})


class InfoProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
        newsInfo: [],
        newsStatus:"",
        ticketsinfo: [],
    };
    this.getNewsInfo();
  }
  
  getNewsInfo = async () => {
    let resNewsInfo = await axios
    .get("/api/news/websites/trending?action=list_trending")
    //.then(res => console.log(res))
    .then(res => this.setState({ newsInfo: res.data.retlist }))
    .catch((err) => console.log("Error: ", err));
    //return this.state.newsInfo;
  };


  getNewsStatus = async () => {
    let resNewsInfo = await axios
    .get("/api/news/websites/trending?action=list_trending")
    .then(res =>  this.setState({ newsStatus: resNewsInfo.data.ret}))
    .catch((err) => console.log("Error: ", err));
    //return resNewsInfo.data.ret;
  };


  render() {
    //const { newsInfo } = this.getNewsInfo();
    return (
      <InfoContext.Provider value={{
          newsInfo:this.state.newsInfo,
          ticketsinfo:this.state.ticketsinfo,
          newsStatus:this.state.newsStatus,
      }}>
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

const InfoConsumer = InfoContext.Consumer;
export { InfoProvider, InfoConsumer };
