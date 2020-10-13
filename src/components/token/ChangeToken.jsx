import React, { useState } from "react";
import caver from "../../klaytn/caver";
import "./Token.scss";
import * as config from "../../config";

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;
const DEPLOYED_ABI = config.DEPLOYED_ABI;

const ChangeToken = ({ address, tokenBalance }) => {
  const contract = new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS);
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const ChangeTokenTransaction = () => {
    const from = address;
    const gas = 300000;
    if (value <= 0) {
      alert("환전할 수량을 정확히 입력해 주세요.");
    } else if (value > parseInt(tokenBalance)) {
      alert("보유한 토큰이 부족합니다.");
    } else {
      const amount = caver.utils.toPeb(value, "KLAY");
      contract.methods
        .unstaking(amount)
        .send({
          from,
          gas,
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
          alert("토큰 환전에 성공하였습니다.");
          document.location.href = "/mypage/token/";
        });
    }
  };

  return (
    <div>
      <p className="font-bold-700 font-1H font-color-lightgray">토큰 환전</p>

      <div>
        <label>환전 수량</label>
        <input
          type="number"
          className="input-value"
          onChange={onChange}
        ></input>

        <input
          className="buy-button"
          type="button"
          value="환전하기"
          onClick={ChangeTokenTransaction}
        ></input>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default ChangeToken;
