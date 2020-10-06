import React, { useState } from "react";
import caver from "../klaytn/caver";
import { Container } from "reactstrap";
import "./Register.scss";
import * as config from "../config";

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;
const DEPLOYED_ABI = config.DEPLOYED_ABI;

const Register = ({ address, tokenBalance }) => {
  const axios = require("axios");
  // const setAddress = address;
  const [category, setCategory] = useState("fashion");
  const [page, setPage] = useState("");
  const [tag, setTag] = useState("");
  const [goal, setGoal] = useState("");
  const [reward, setReward] = useState("");

  const contract = new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS);
  // const [from, setFrom] = useState("");
  // const [to, setTo] = useState(DEPLOYED_ADDRESS);
  // const [value, setValue] = useState("");
  const [gas, setGas] = useState(300000);

  const onCategory = (e) => {
    setCategory(e.target.value);
  };

  const onPage = (e) => {
    setPage(e.target.value);
  };

  const onTag = (e) => {
    setTag(e.target.value);
  };

  const onGoal = (e) => {
    setGoal(e.target.value);
  };

  const onReward = (e) => {
    setReward(e.target.value);
  };

  const onRegister = (e) => {
    const from = address;
    const token = tokenBalance;
    const amount = caver.utils.toPeb(reward, "KLAY");
    // console.log(goal, amount, from, token);
    if (reward < 0) {
      //원래는 reward <=0 입력해야 하나 테스트 상 0 입력하기 위해 진행
      alert("마케팅 보상 수량을 정확히 입력해 주세요.");
    } else if (reward > token) {
      alert(`보유 토큰이 부족합니다. 현재 보유 토큰 : ${token}`);
    } else {
      contract.methods
        .createAdvertise(goal, amount)
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
          alert("블록에 정보 저장을 성공하였습니다.");
          onSubmit();
        });
    }
  };

  const onSubmit = (e) => {
    const obj = {
      category: category,
      account: address,
      page: page,
      tag: tag,
      goal: goal,
      reward: reward,
    };
    console.log(obj);

    axios
      .post("http://localhost:5000/api/mission", obj)
      .then(
        (res) => console.log(res.data),
        alert("데이터 베이스에 정상적으로 등록 되었습니다"),
        (document.location.href = "/mypage/mymission/")
      );
    //e.preventDefault();
  };

  return (
    <Container>
      <div className="register">
        {/* {gas ? gas : <li>가스 없음</li>} */}
        <label>카테고리</label>
        <select className="select margin-bottom-1e" onChange={onCategory}>
          <option value="fashion">패션</option>
          <option value="it">IT</option>
          <option value="food">음식</option>
        </select>

        <label>등록할 계정 주소</label>
        <input
          disabled
          className="input-text"
          type="text"
          value={address}
        ></input>

        <label>페이지 주소</label>
        <input
          type="text"
          className="input-text"
          placeholder="목표 페이지 주소"
          onChange={onPage}
        ></input>

        <label>검색용 태그</label>
        <input className="input-text" type="text" onChange={onTag}></input>

        <label>목표 좋아요 개수</label>
        <input className="number" type="number" onChange={onGoal}></input>

        <label>마케팅 보상 토큰</label>
        <input className="number" type="number" onChange={onReward}></input>
        <input
          className="regbutton"
          type="button"
          value="등록하기"
          onClick={onRegister}
        ></input>
      </div>
    </Container>
  );
};

export default Register;
