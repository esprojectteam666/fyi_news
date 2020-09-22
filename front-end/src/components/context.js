import React, { Component } from "react";
import {newsinfo, ticketsinfo, detailInfo, news } from '../data'

const InfoContext = React.createContext();


class InfoProvider extends Component {

    state = {
        newsinfo: newsinfo,
        ticketsinfo:ticketsinfo,

    }

  render() {
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
