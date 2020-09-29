import React, { Component } from "react";
import caver from "../../klaytn/caver";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import * as config from "../../config";

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;

class TransferToken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: props.address,
      to: "",
      value: "",
      gas: 3000000,
      contractAddress: DEPLOYED_ADDRESS,
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

  tokenTransaction = () => {
    const { from, contractAddress, to, value, gas } = this.state;
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
            name: "amount",
          },
        ],
      },
      [to, caver.utils.toPeb(value, "KLAY")]
    );

    caver.klay
      .sendTransaction({
        type: "SMART_CONTRACT_EXECUTION",
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
        document.location.href = "/mypage/token/";
      })
      .on("error", (error) => {
        console.log("error", error);
        this.setState({ error: error.message });
      });
  };

  render() {
    const { from, to, value } = this.state;
    return (
      <div>
        <Form>
          <p className="font-bold-700 font-1H padding-top-1e font-color-lightgray">
            토큰 전송
          </p>
          <Form.Group>
            <Form.Label>보내는 수량</Form.Label>
            <Form.Control
              name="value"
              value={value}
              onChange={this.handleChange}
            />
            <Form.Label>받는 주소</Form.Label>
            <Form.Control name="to" value={to} onChange={this.handleChange} />
          </Form.Group>

          <Button variant="warning" onClick={this.tokenTransaction}>
            전송
          </Button>
          <div className="line"></div>
        </Form>
      </div>
    );
  }
}

export default TransferToken;
