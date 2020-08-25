import React, { Component } from "react";
import caver from "./klaytn/caver";

import WalletInfo from "./components/WalletInfo";
import Staking from "./components/Staking";
import Sending from "./components/send";

const DEPLOYED_ADDRESS = "0x00a6abA7Dc038296db014D8Ef9d8C70982E589BC";

require("dotenv").config();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      balance: 0,
    };
  }

  componentDidMount() {
    this.loadAccountInfo();
    this.setNetworkInfo();
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
    const name = await kip7.name();
    const symbol = await kip7.symbol();
    const decimals = await kip7.decimals();
    const totalSupply = await kip7.totalSupply();
    const tokenBalance = await kip7.balanceOf(account);

    this.setState({
      account,
      balance: caver.utils.fromPeb(balance, "KLAY"),
      name,
      symbol,
      totalSupply: caver.utils.fromPeb(totalSupply, "Mpeb") / 100,
      tokenBalance: caver.utils.fromPeb(tokenBalance, "Mpeb") / 100,
    });
  };

  setNetworkInfo = () => {
    const { klaytn } = window;
    if (klaytn === undefined) return;

    this.setState({ network: klaytn.networkVersion });
    klaytn.on("networkChanged", () =>
      this.setNetworkInfo(klaytn.networkVersion)
    );
  };

  render() {
    const {
      account,
      balance,
      tokenBalance,
      name,
      symbol,
      totalSupply,
    } = this.state;

    return (
      <div className="MainPage">
        <WalletInfo
          address={account}
          balance={balance}
          tbalance={tokenBalance}
          name={name}
          symbol={symbol}
          totalSupply={totalSupply}
        />
        {account.length > 0 && <Sending />}
      </div>
    );
  }
}

export default App;
