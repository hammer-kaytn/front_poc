import React, { Component } from "react";
import caver from "../klaytn/caver";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import * as config from "../config";

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;
const DEPLOYED_ABI = config.DEPLOYED_ABI;

class Multisig extends Component {
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
      data: "",
      gas: 3000000,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitTransaction = () => {
    const { from, destination, value, data, gas } = this.state;

    const amount = caver.utils.toPeb(value, "KLAY");
    this.stakingContract.methods
      .submitTransaction(destination, amount, data)
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

  confirmTransaction = () => {
    const { from, value, gas, txID } = this.state;

    const amount = caver.utils.toPeb(value, "KLAY");
    this.stakingContract.methods
      .confirmTransaction(txID)
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
    const { from, destination, value, txID } = this.state;
    return (
      <div>
        <Form>
          <h4>멀티시그</h4>
          <Form.Group>
            <Form.Label>보내는 주소</Form.Label>
            <Form.Control
              name="from"
              label="From"
              value={from}
              onChange={this.handleChange}
            />
            <Form.Label>destination</Form.Label>
            <Form.Control
              name="destination"
              label="destination"
              value={destination}
              onChange={this.handleChange}
            />
            <Form.Label>value</Form.Label>
            <Form.Control
              name="value"
              label="Value"
              value={value}
              onChange={this.handleChange}
            />
            <Form.Label>tx id</Form.Label>
            <Form.Control
              name="txID"
              label="txID"
              value={txID}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={this.submitTransaction}>
            submitTransaction
          </Button>

          <Button variant="warning" onClick={this.confirmTransaction}>
            confirmTransaction
          </Button>
        </Form>
      </div>
    );
  }
}

export default Multisig;
