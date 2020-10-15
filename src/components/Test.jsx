import React, { useState } from 'react';
import axios from 'axios';
import caver from '../klaytn/caver';
import * as config from '../config';
import styles from './token/txlist.module.css';
import { useEffect } from 'react';

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;
const DEPLOYED_ABI = config.DEPLOYED_ABI;

const Test = ({ address }) => {
  const [missionId, setMissionId] = useState('');
  const contract = new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS);
  let gas = 300000;

  const [lists, setLists] = useState([]);

  const onChange = (e) => {
    setMissionId(e.target.value);
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
      })
      .then(() => {
        alert('블록에 저장을 성공하였습니다.');
        onModify();
      });
  };

  const onModify = () => {
    //DB status 업데이트 합수
    const obj = {
      missionId: missionId,
      status: '종료',
    };
    axios
      .post('http://localhost:5000/api/mission/updateStatus', obj)
      .then(
        (res) => console.log(res.data),
        alert('미션 보상이 완료되었습니다.')(
          (document.location.href = `/test`),
        ),
      );
    //e.preventDefault();
  };

  useEffect(() => {
    const getMissions = async () => {
      try {
        // 등록된 모든 미션 확인하는 함수
        const res = await axios.get('http://localhost:5000/api/mission/list');
        setLists(res.data);
      } catch (error) {
        // console.log(error);
      }
    };
    getMissions();
  }, [address]);

  return (
    <div className="padding-top-4e">
      <div>
        {address}
        <input onChange={onChange}></input>
        <input type="button" value="리워드" onClick={onReward}></input>
        <h1 className="font-bold-700 padding-top-1e font-color-lightgray">
          매니저 관련 테스트 페이지
        </h1>
        <table className={styles.txlists}>
          <thead>
            <tr>
              <th className={styles.category}>카테고리</th>
              <th className={styles.title}>제목</th>
              <th className={styles.liked}>미션 진행상황(현재/목표)</th>
              <th className={styles.status}>상태</th>
            </tr>
          </thead>

          {lists &&
            lists.map((list) => (
              <tbody key={list._id}>
                <tr>
                  <td>{list.category}</td>
                  <td>
                    <a
                      className={styles.titlelink}
                      href={`/mission/${list.missionId}`}
                    >
                      {list.title}
                    </a>
                  </td>
                  <td>
                    {list.likes} / {list.goal}
                  </td>
                  <td>{list.status}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Test;
