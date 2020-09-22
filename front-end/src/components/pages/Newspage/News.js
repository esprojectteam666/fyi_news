import React, { Component } from "react";
import { InfoConsumer } from "../../context";
import Info from "../../Info";

class News extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <InfoConsumer>
            {(value) => {
              return value.newsinfo.map((item) => {
                return <Info key={item.id} item={item} />;
              });
            }}
          </InfoConsumer>
        </div>
      </div>
    );
  }
}

export default News;
