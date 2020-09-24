import React, { Component } from "react";
//import {newsinfo, ticketsinfo, detailInfo, news } from '../data'
import axios from "axios";

const InfoContext = React.createContext();


class InfoProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
        newsinfo: [1],
        ticketsinfo: [],

    };
  }
  getNewsinfo = () => {
    
    axios
      .get("http://127.0.0.1:8000/api/news/websites/trending?action=list_trending")
      //alert(this.ticketsinfo);


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
