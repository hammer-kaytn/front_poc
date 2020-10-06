import React, { useState } from "react";
import caver from "../../klaytn/caver";
import "./Token.scss";
import * as config from "../../config";

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;

const TransferToken = ({ address, tokenBalance }) => {
  const [to, setTo] = useState("");
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onTo = (e) => {
    setTo(e.target.value);
  };

  const TransferTokenTransaction = () => {
    const from = address;
    const gas = 300000;
    const contractAddress = DEPLOYED_ADDRESS;
    if (to === "") {
      alert("받을 주소를 입력해 주세요.");
    } else if (value <= 0) {
      alert("전송할 수량을 정확히 입력해 주세요.");
    } else if (value > tokenBalance) {
      alert("보유한 토큰이 부족합니다.");
    } else {
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
        })
        .on("receipt", (receipt) => {
          console.log("receipt", receipt);
        })
        .on("error", (error) => {
          console.log("error", error);
        })
        .then(() => {
          alert("토큰 전송에 성공하였습니다.");
          document.location.href = "/mypage/token/";
        });
    }
  };

  return (
    <div>
      <p className="font-bold-700 font-1H font-color-lightgray">토큰 전송</p>

      <div>
        <label>받을 주소</label>
        <input
          type="text"
          className="input-to"
          name="to"
          onChange={onTo}
        ></input>
        <label>보낼 수량</label>
        <input
          type="number"
          className="input-value"
          onChange={onChange}
        ></input>
        <input
          className="buy-button"
          type="button"
          value="전송하기"
          onClick={TransferTokenTransaction}
        ></input>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default TransferToken;
