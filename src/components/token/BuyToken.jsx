import React, { useState } from "react";
import caver from "../../klaytn/caver";
import "./Token.scss";
import * as config from "../../config";

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;
const DEPLOYED_ABI = config.DEPLOYED_ABI;

const BuyToken = ({ address, balance }) => {
  const contract = new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS);
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const BuyTokenTransaction = () => {
    const from = address;
    const gas = 300000;
    if (value <= 0) {
      alert("구매할 수량을 정확히 입력해 주세요.");
    } else if (value > parseInt(balance)) {
      alert(`보유한 클레이가 부족합니다. ${value} ${balance}`);
    } else {
      contract.methods
        .staking()
        .send({
          from,
          gas,
          value: caver.utils.toPeb(value, "KLAY"),
        })
        .on("transactionHash", (transactionHash) => {
          console.log("txHash", transactionHash);
        })
        .on("receipt", (receipt) => {
          console.log("receipt", receipt);
        })
        .on("error", (error) => {
          console.log("error", error);
        })
        .then(() => {
          alert("토큰 구매에 성공하였습니다.");
          document.location.href = "/mypage/token/";
        });
    }
  };

  return (
    <div>
      <p className="font-bold-700 font-1H font-color-lightgray">토큰 구매</p>

      <div>
        <label>구매 수량</label>
        <input
          type="number"
          className="input-value"
          onChange={onChange}
        ></input>

        <input
          className="buy-button"
          type="button"
          value="구매하기"
          onClick={BuyTokenTransaction}
        ></input>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default BuyToken;
