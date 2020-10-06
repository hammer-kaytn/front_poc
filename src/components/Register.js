import React, { useState, useEffect, useCallback } from "react";
import caver from "../klaytn/caver";
import { Container, Row, Col } from "reactstrap";
import "./Register.scss";
import * as config from "../config";

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;
const DEPLOYED_ABI = config.DEPLOYED_ABI;

const Register = ({ address }) => {
  const axios = require("axios");
  const [category, setCategory] = useState("fashion");
  const [page, setPage] = useState("");
  const [tag, setTag] = useState("");
  const [goal, setGoal] = useState("");
  const [reward, setReward] = useState("");

  const onCategory = useCallback((e) => {
    setCategory(e.target.value);
  });

  const onPage = useCallback((e) => {
    setPage(e.target.value);
  });

  const onTag = useCallback((e) => {
    setTag(e.target.value);
  });

  const onGoal = useCallback((e) => {
    setGoal(e.target.value);
  });

  const onReward = useCallback((e) => {
    setReward(e.target.value);
  });

  // const missionRegisterTransaction = () => {
  //   const { from, value, gas } = this.state;
  //   this.stakingContract.methods
  //     .staking()
  //     .send({
  //       from,
  //       gas,
  //       value: caver.utils.toPeb(value, "KLAY"),
  //     })
  //     .on("transactionHash", (transactionHash) => {
  //       console.log("txHash", transactionHash);
  //       this.setState({ txHash: transactionHash });
  //     })
  //     .on("receipt", (receipt) => {
  //       console.log("receipt", receipt);
  //       this.setState({ receipt: JSON.stringify(receipt) });
  //       document.location.href = "/mypage/token/";
  //     })
  //     .on("error", (error) => {
  //       console.log("error", error);
  //       this.setState({ error: error.message });
  //     });
  // };

  const onSubmit = useCallback((e) => {
    const obj = {
      category: category,
      account: address,
      page: page,
      tag: tag,
      goal: goal,
      reward: reward,
    };
    console.log(obj);

    axios.post("http://localhost:5000/api/mission", obj).then(
      (res) => console.log(res.data),
      alert("정상적으로 등록 되었습니다")
      //document.location.href = "/mypage/mysns/";
    );
    //e.preventDefault();
  });
  return (
    <Container>
      <div className="register">
        <form onSubmit={onSubmit}>
          <label>카테고리</label>
          <select
            id="category"
            name="category"
            className="margin-bottom-1e"
            onChange={onCategory}
          >
            <option value="fashion">패션</option>
            <option value="it">IT</option>
            <option value="food">음식</option>
          </select>

          <label for="account">등록할 계정 주소</label>
          <input required disabled type="text" value={address}></input>

          <label for="page">페이지 주소</label>
          <input
            required
            type="text"
            placeholder="목표 페이지 주소"
            onChange={onPage}
          ></input>

          <label for="lname">검색용 태그</label>
          <input
            required
            type="text"
            id="tag"
            name="tag"
            onChange={onTag}
          ></input>

          <label for="lname">목표 좋아요 개수</label>
          <input
            required
            type="number"
            id="goal"
            name="goal"
            onChange={onGoal}
          ></input>

          <label for="lname">마케팅 보상 토큰</label>
          <input
            required
            type="number"
            id="reward"
            name="reward"
            onChange={onReward}
          ></input>

          <input type="submit" value="등록하기"></input>
        </form>
      </div>
    </Container>
  );
};

export default Register;
