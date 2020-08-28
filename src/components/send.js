import React, { Component } from "react";
import caver from "../klaytn/caver";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class TransferLegacy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: props.address,
      to: "",
      value: "",
      gas: 3000000,
      contractAddress: "0x6c03D39CDd30fdbec487304b3F1A446c37df543f",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  signTransaction = () => {
    const { from, to, value, gas } = this.state;

    caver.klay
      .sendTransaction({
        from,
        to,
        value: caver.utils.toPeb(value.toString(), "KLAY"),
        gas,
      })
      .once("transactionHash", (transactionHash) => {
        console.log("txHash", transactionHash);
        this.setState({ txHash: transactionHash });
      })
      .once("receipt", (receipt) => {
        console.log("receipt", receipt);
        this.setState({ receipt: JSON.stringify(receipt) });
        document.location.href = "/";
      })
      .once("error", (error) => {
        console.log("error", error);
        this.setState({ error: error.message });
      });
  };

  tokenTransaction = () => {
    const { from, contractAddress, to, value, gas } = this.state;
    const amount = caver.utils.toPeb(value.toString(), "KLAY")
    console.log(value)
    console.log(amount);
    const data = caver.klay.abi.encodeFunctionCall(
      {
        name: "transfer",
        type: "function",
        inputs: [
          {
            type: "address",
            name: "recipient",
          },
          {
            type: "uint256",
            name: "amount"
          },
        ],
      },
      [to, caver.utils.toPeb(value, 'KLAY')]
    );

    caver.klay
      .sendTransaction({
        type: 'SMART_CONTRACT_EXECUTION',
        from,
        to: contractAddress,
        data,
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
    const { from, to, value, gas } = this.state;
    return (
      <div>
        <Form>
          <h4>클레이/토큰 전송</h4>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>보내는 주소</Form.Label>
            <Form.Control
              required
              name="from"
              label="From"
              value={from}
              onChange={this.handleChange}
            />
            <Form.Label>받는 주소</Form.Label>
            <Form.Control name="to" value={to} onChange={this.handleChange} />
            <Form.Label>보내는 클레이/토큰</Form.Label>
            <Form.Control
              name="value"
              label="Value"
              value={value}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={this.signTransaction}>
            클레이 전송
          </Button>
          <Button variant="warning" onClick={this.tokenTransaction}>
            해머토큰 전송
          </Button>
        </Form>
      </div>
    );
  }
}

export default TransferLegacy;
