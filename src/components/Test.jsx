import React, { useState, useEffect } from 'react';
import caver from '../klaytn/caver';
import * as config from '../config';

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;
const DEPLOYED_ABI = config.DEPLOYED_ABI;

const Test = ({ address }) => {
  const [missionId, setMissionId] = useState('');
  const contract = new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS);
  const [gas, setGas] = useState(300000);

  const onChange = (e) => {
    setMissionId(e.target.value);
  };

  const onLike = () => {
    const from = address;
    contract.methods
      .likeMission(missionId)
      .send({
        from,
        gas,
      })
      .on('transactionHash', (transactionHash) => {
        console.log('txHash', transactionHash);
      })
      .on('receipt', (receipt) => {
        console.log('receipt', receipt);
      })
      .on('error', (error) => {
        console.log('error', error);
      });
  };

  const onReward = () => {
    const from = address;
    contract.methods
      .rewordMission(missionId)
      .send({
        from,
        gas,
      })
      .on('transactionHash', (transactionHash) => {
        console.log('txHash', transactionHash);
      })
      .on('receipt', (receipt) => {
        console.log('receipt', receipt);
      })
      .on('error', (error) => {
        console.log('error', error);
      });
  };

  const onGet = () => {
    // const from = address;
    // contract.methods
    //   .getMission(missionId)
    //   .send({
    //     from,
    //     gas,
    //   })
    //   .on("transactionHash", (transactionHash) => {
    //     console.log("txHash", transactionHash);
    //   })
    //   .on("receipt", (receipt) => {
    //     console.log("receipt", receipt);
    //   })
    //   .on("error", (error) => {
    //     console.log("error", error);
    //   });
    let date = Date.now;
    console.log(date);
  };
  return (
    <div className="padding-top-4e">
      <h1>노드 접근 관련 테스트 페이지</h1>
      {address}
      <input onChange={onChange}></input>
      <input type="button" value="라이크" onClick={onLike}></input>
      <input type="button" value="리워드" onClick={onReward}></input>
      <input type="button" value="겟" onClick={onGet}></input>
    </div>
  );
};

export default Test;
