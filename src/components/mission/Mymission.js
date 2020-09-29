import React, { Component } from "react";
import caver from "../../klaytn/caver";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "../Sidebar";
import * as config from "../../config";

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;

class Mymission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
    };
  }

  componentDidMount() {
    this.loadAccountInfo();
  }

  loadAccountInfo = async () => {
    const { klaytn } = window;

    if (klaytn) {
      try {
        await klaytn.enable();
        this.setAccountInfo(klaytn);
        klaytn.on("accountsChanged", () => this.setAccountInfo(klaytn));
      } catch (error) {
        console.log("User denied account access");
      }
    } else {
      console.log(
        "Non-Kaikas browser detected. You should consider trying Kaikas!"
      );
    }
  };

  setAccountInfo = async () => {
    const { klaytn } = window;
    if (klaytn === undefined) return;
    await new Promise((resolve, reject) => setTimeout(resolve, 500));
    const account = klaytn.selectedAddress;
    const balance = await caver.klay.getBalance(account);
    const kip7 = new caver.kct.kip7(DEPLOYED_ADDRESS);
    const tokenSymbol = await kip7.symbol();
    const tokenBalance = await kip7.balanceOf(account);

    this.setState({
      account,
      balance: caver.utils.fromPeb(balance, "KLAY"),
      tokenSymbol,
      tokenBalance: caver.utils.fromPeb(tokenBalance, "KLAY"),
    });
  };

  render() {
    const { account, balance, tokenBalance, tokenSymbol } = this.state;

    return (
      <div>
        <Container>
          <Row>
            <Col xs={12} sm={4} md={2}>
              <Sidebar
                address={account}
                balance={balance}
                tokenSymbol={tokenSymbol}
                tokenBalance={tokenBalance}
              />
            </Col>
            <Col xs={12} sm={8} md={10}>
              내 프로젝트 현황
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Mymission;
