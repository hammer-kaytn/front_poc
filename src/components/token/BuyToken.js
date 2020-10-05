import React, { Component } from "react";
import caver from "../../klaytn/caver";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Token from "./Token";

import * as config from "../../config";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;
const DEPLOYED_ABI = config.DEPLOYED_ABI;

class BuyToken extends Component {
  constructor(props) {
    super(props);
    this.stakingContract = new caver.klay.Contract(
      DEPLOYED_ABI,
      DEPLOYED_ADDRESS
    );
    this.state = {
      from: props.address,
      to: DEPLOYED_ADDRESS,
      value: "",
      gas: 3000000,
    };
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.address !== prevState.address) {
      return { from: nextProps.address };
    }
    return null;
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  BuyTokenTransaction = () => {
    const { from, value, gas } = this.state;
    this.stakingContract.methods
      .staking()
      .send({
        from,
        gas,
        value: caver.utils.toPeb(value, "KLAY"),
      })
      .on("transactionHash", (transactionHash) => {
        console.log("txHash", transactionHash);
        this.setState({ txHash: transactionHash });
      })
      .on("receipt", (receipt) => {
        console.log("receipt", receipt);
        this.setState({ receipt: JSON.stringify(receipt) });
        document.location.href = "/mypage/token/";
      })
      .on("error", (error) => {
        console.log("error", error);
        this.setState({ error: error.message });
      });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <Form>
          <p className="font-bold-700 font-1H font-color-lightgray">
            토큰 구매
          </p>
          <Form.Group>
            <Form.Label>구매 수량</Form.Label>
            <Form.Control
              name="value"
              value={value}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={this.BuyTokenTransaction}>
            구매
          </Button>
          <div className="line"></div>
        </Form>
      </div>
    );
  }
}

export default BuyToken;
