import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Mission.module.css';
import caver from '../klaytn/caver';
import * as config from '../config';

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;
const DEPLOYED_ABI = config.DEPLOYED_ABI;

let checkAuth;

const Misson = ({ match, address, tokenBalance }) => {
  const axios = require('axios');
  const setAddress = { address };
  let missionId = match.params.missionId;
  const contract = new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS);
  const [gas, setGas] = useState(300000);
  const [mymissions, SetMymissions] = useState([]);

  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMission = async () => {
    //현재 미션 정보 읽어오기
    try {
      // 요청이 시작 할 때에는 error 초기화하고
      setError(null);
      setMission(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/mission/${missionId}`,
      );
      setMission(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  const movePage = () => {
    window.open(mission.page);
  };

  const onLike = () => {
    if (checkAuth === 'false') {
      alert('본인 인증 한 계정만 미션 참여가 가능합니다.');
    } else {
      try {
        const newArray = mymissions.map((mission) => {
          return mission.missionId;
        });

        const result = checkMission(newArray, missionId);
        if (mission.likes >= mission.goal) {
          console.log(missionId.likes);
          alert(`이미 목표가 달성된 미션입니다. : ${missionId}`);
        } else if (result === true) {
          alert(`이미 참여한 미션입니다. 미션번호 : ${missionId}`);
          // movePage()
        } else if (parseInt(tokenBalance) < 1) {
          alert(
            `참여 토큰이 부족합니다. 참여필요토큰 : 1 / 현재보유토큰 : ${tokenBalance}`,
          );
        } else {
          addBlock(); //블록 기록부터 적용
          //  addDatabase() //데이터베이스 기록부터 적용
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getMissions = async () => {
    //지갑 계정의 미션 참가 확인 기록 불러오기
    try {
      let account = { address }.address;
      checkAuth = 'true';
      const mymissions = await axios.get(
        `http://localhost:5000/api/accounts/${account}`,
      );
      console.log(mymissions.data.participateList);
      SetMymissions(mymissions.data.participateList);
    } catch (error) {
      checkAuth = 'false';
      // alert("본인 인증을 먼저 해 주세요.")
      // (document.location.href = '/mypage/myaccount')
    }
  };

  const checkMission = (array, value) => {
    //내가 참여했는지 확인하는 함수
    console.log(array);
    return array.some((arrayValue) => value === arrayValue);
  };

  const addBlock = () => {
    //블록에 기록하는 함수
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
      })
      .then(async () => {
        alert('블록에 정보 저장을 성공하였습니다.');
        await addDatabase();
      });
  };

  const addDatabase = () => {
    //데이터베이스에 기록하는 함수(내가 참여한 기록 추가)
    const obj = {
      account: setAddress.address,
      missionId: missionId,
    };
    console.log(obj);
    axios
      .post('http://localhost:5000/api/accounts/addMission', obj)
      .then(
        (res) => console.log(res.data),
        alert('데이터 베이스에 정상적으로 등록 되었습니다'),
        updateMission(),
      );
  };

  const updateMission = () => {
    //데이터베이스에 기록하는 함수(현재 미션에 내 지갑 주소 추가, 좋아요 +1)
    const obj = {
      missionId: missionId,
      account: setAddress.address,
    };
    console.log(obj);
    axios
      .post('http://localhost:5000/api/mission/updateMission', obj)
      .then(
        (res) => console.log(res.data),
        alert(
          '현재 미션에 정상적으로 참여하였습니다. 해당 페이지에서 꼭 좋아요를 눌러주세요. :)',
        ),
        (document.location.href = `/mission/${missionId}`),
        movePage(),
      );
  };

  useEffect(() => {
    getMissions();
    fetchMission();
  }, [address]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!mission) return null;

  return (
    <container>
      <section className={styles.detail}>
        <i className={styles.category}>{mission.category}</i>
        <h1 className={styles.title}>{mission.title}</h1>
      </section>

      <section className={styles.details}>
        <img className={styles.image} src={mission.image} />
        <div className={styles.datas}>
          <div className={styles.data}>
            <ul className={styles.counttitle}>남은 기간</ul>
            <div className={styles.metadata}>
              <div className={styles.count}>10</div>
              <div className={styles.metacount}>일</div>
            </div>
          </div>
          <div>
            <hr className={styles.line} />
          </div>
          <div className={styles.data}>
            <ul className={styles.counttitle}>달성 수치</ul>
            <div className={styles.metadata}>
              <div className={styles.count}>{mission.likes}</div>
              <div className={styles.metacount}>/ {mission.goal}❤️</div>
            </div>
          </div>
          <div className={styles.data}>
            <ul className={styles.counttitle}>총 보상 리워드</ul>
            <div className={styles.metadata}>
              <div className={styles.count}>{mission.reward}</div>
              <div className={styles.metacount}>HLT</div>
            </div>
          </div>
          <button className={styles.button} onClick={onLike} type="submit">
            광고 보러 가기
          </button>
        </div>
      </section>
      <section>
        <div className={styles.midline}>
          <button className={styles.btn}>게시물 정보</button>
          <button className={styles.btn}>좋아요 누른 사람들</button>
        </div>

        <ul className={styles.ul}>
          {mission.participateList.map((mission) => (
            <li>{mission.account}</li>
          ))}
        </ul>
      </section>
    </container>
  );
};

export default Misson;
