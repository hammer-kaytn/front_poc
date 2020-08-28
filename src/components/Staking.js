import React, { Component } from "react";
import caver from "../klaytn/caver";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import * as config from "../config";

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;
const DEPLOYED_ABI = config.DEPLOYED_ABI;

class Staking extends Component {
  constructor(props) {
    super(props);
    this.stakingContract = new caver.klay.Contract(
      DEPLOYED_ABI,
      DEPLOYED_ADDRESS
    );
    this.state = {
      from: "",
      to: DEPLOYED_ADDRESS,
      value: "",
      gas: 3000000,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  stakingTransaction = () => {
    const { from, value, gas } = this.state;
    this.stakingContract.methods
      .Staking()
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
        document.location.href = "/";
      })
      .on("error", (error) => {
        console.log("error", error);
        this.setState({ error: error.message });
      });
  };

  unstakingTransaction = () => {
    const { from, value, gas } = this.state;

    const amount = caver.utils.toPeb(value, "KLAY");
    this.stakingContract.methods
      .Unstaking(amount)
      .send({
        from,
        gas,
      })
      .on("transactionHash", (transactionHash) => {
        console.log("txHash", transactionHash);
        this.setState({ txHash: transactionHash });
      })
      .on("receipt", (receipt) => {
        console.log("receipt", receipt);
        this.setState({ receipt: JSON.stringify(receipt) });
        document.location.href = "/";
      })
      .on("error", (error) => {
        console.log("error", error);
        this.setState({ error: error.message });
      });
  };

  render() {
    const { from, value } = this.state;
    return (
      <div>
        <Form>
          <h4>스테이킹/언스테이킹</h4>
          <Form.Group>
            <Form.Label>보내는 주소</Form.Label>
            <Form.Control
              name="from"
              label="From"
              value={from}
              onChange={this.handleChange}
            />
            <Form.Label>스테이킹/언스테이킹 할 수량</Form.Label>
            <Form.Control
              name="value"
              label="Value"
              value={value}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={this.stakingTransaction}>
            스테이킹
          </Button>

          <Button variant="warning" onClick={this.unstakingTransaction}>
            언스테이킹
          </Button>
        </Form>
      </div>
    );
  }
}

export default Staking;
