import React, { Component } from "react";
import caver from "../klaytn/caver";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class Staking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: props.address,
      to: "",
      value: "",
      gas: 3000000,
      contractAddress: "0x00a6abA7Dc038296db014D8Ef9d8C70982E589BC",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };




  render() {
    const { from, to, value, gas } = this.state;
    return (
      <div>
        <Form>
          <h4>스테이킹/언스테이킹</h4>
          <Form.Group controlId="formBasicEmail">

            <Form.Label>스테이킹 할 수량</Form.Label>
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
