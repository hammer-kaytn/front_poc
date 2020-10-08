import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import caver from "../klaytn/caver";
import Home from "./Home";
import Token from "./token/Token";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import * as config from "../config";
import Participate from "./Participate";
import Register from "./Register";
import Mymission from "./mission/Mymission";
import Mysns from "./sns/Mysns";
import Test from "./Test";

import Switch from "react-bootstrap/esm/Switch";

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;

class App extends Component {
  state = {
    account: "",
    balance: 0,
  };

  componentDidMount() {
    this.loadAccountInfo();
    if (this.state.account === "") {
      console.log("로그인 안되어있음");
      console.log(this.klaytn);
    } else {
      console.log("로그인 되어있음");
    }
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
      <div className="MainPage">
        <Router>
          <Navbar
            sticky="top"
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
          >
            <Navbar.Brand>
              <Link to="/">하트링크</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/participate">참여하기</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/register">등록하기</Link>
                </Nav.Link>

                <NavDropdown title="마이페이지" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/mypage/mysns">SNS 계정 연결</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/mypage/mymission">내 미션 현황</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/mypage/token">토큰 관리</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link>
                  {account + "님" || "카이카스 연결해 주세요 :)"}
                </Nav.Link>
                <Nav.Link eventKey={2} href="#login">
                  <Button
                    variant="outline-primary"
                    onClick={this.loadAccountInfo}
                  >
                    카이카스 연결
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" render={() => <Home address={account} />} />
            <Route
              path="/participate"
              render={() => <Participate address={account} />}
            />
            <Route
              path="/register"
              render={() => (
                <Register address={account} tokenBalance={tokenBalance} />
              )}
            />
            <Route
              path="/mypage/mysns"
              render={() => (
                <Mysns
                  address={account}
                  balance={balance}
                  tokenBalance={tokenBalance}
                  tokenSymbol={tokenSymbol}
                />
              )}
            />
            <Route
              path="/mypage/mymission"
              render={() => (
                <Mymission
                  address={account}
                  balance={balance}
                  tokenBalance={tokenBalance}
                  tokenSymbol={tokenSymbol}
                />
              )}
            />
            <Route
              path="/mypage/token"
              render={() => (
                <Token
                  address={account}
                  balance={balance}
                  tokenBalance={tokenBalance}
                  tokenSymbol={tokenSymbol}
                />
              )}
            />
            {/* 테스트용 페이지 라우터 */}
            <Route path="/test" render={() => <Test address={account} />} />

            {/* <Redirect path="*" to="/" /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
