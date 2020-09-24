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
        newsinfo: [1],
        ticketsinfo: [],

    };
  }
  
  getNewsinfo = async () => {
    let resNewsInfo = await axios
    .get("/api/news/websites/trending?action=list_trending")
    .catch((err) => console.log("Error: ", err))

    console.log(resNewsInfo)
  };

  render() {
    this.getNewsinfo();

    //alert(JSON.stringify(this.newsinfo));
    return (
      <InfoContext.Provider value={{
          newsinfo:this.state.newsinfo,
          ticketsinfo:this.state.ticketsinfo,
      }}>
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
