import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import caver from "./klaytn/caver";
import * as config from "./config";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Participate from "./components/Participate";
import Register from "./components/Register";
import Mymission from "./components/mission/Mymission";
import Mysns from "./components/sns/Mysns";
import Token from "./components/token/Token";
import Test from "./components/Test";
import Mission from "./components/Mission";

import "./App.scss";

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;

const App = () => {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(0);
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenBalance, setTokenBalance] = useState(0);

  useEffect(() => {
    loadAccountInfo();
  });

  const loadAccountInfo = async () => {
    const { klaytn } = window;
    if (klaytn) {
      try {
        await klaytn.enable();
        setAccountInfo(klaytn);
        klaytn.on("accountsChanged", () => setAccountInfo(klaytn));
      } catch (error) {
        console.log("User denied account access");
      }
    } else {
      console.log(
        "Non-Kaikas browser detected. You should consider trying Kaikas!"
      );
    }
  };

  const setAccountInfo = async () => {
    const { klaytn } = window;
    if (klaytn === undefined) return;
    await new Promise((resolve, reject) => setTimeout(resolve, 500));
    const kip7 = new caver.kct.kip7(DEPLOYED_ADDRESS);
    const tempaccount = await klaytn.selectedAddress;
    const tempbalance = await caver.klay.getBalance(tempaccount);
    const temptokenbalance = await kip7.balanceOf(tempaccount);

    setAccount(tempaccount);
    setBalance(caver.utils.fromPeb(tempbalance, "KLAY"));
    setTokenSymbol(await kip7.symbol());
    setTokenBalance(caver.utils.fromPeb(temptokenbalance, "KLAY"));
  };

  return (
    <Router>
      <Header address={account} parentFunc={loadAccountInfo}/>
      <div>
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
        {/* <Route
          path="/mission/:id"
          component={Mission}
        /> */}
        <Route
          path="/mission/:missionId"
          render={(props) => (
            <Mission
              address={account}
              tokenBalance={tokenBalance}
              {...props}
            />
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
              parentFunc={loadAccountInfo}
            />
          )}
        />
        {/* 테스트용 페이지 라우터 */}
        <Route path="/test" render={() => <Test address={account} />} />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
