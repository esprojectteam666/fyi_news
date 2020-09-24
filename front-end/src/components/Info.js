import React, { Component } from "react";
import { InfoConsumer } from "./context";

class Info extends Component {
  render() {
    const { ret, title } = this.props.item;

    return (
      <InfoConsumer>
        {(data) => (
          <div className="col-10 col-lg-4 mx-auto mb-5">
            <div className="card" style={{width:'rem'}}>
              <div className="card-header">{ret}</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">1 ....</li>
                <li className="list-group-item">2 ....</li>
                <li className="list-group-item">3 ....</li>
                <li className="list-group-item">4 ....</li>
                <li className="list-group-item">5 ....</li>

              </ul>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}

export default Info;
