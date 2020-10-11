import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Mission.module.css";


const Misson = ({ match, address, tokenBalance }) => {
  const axios = require("axios");
  const setAddress = { address }
  let missionId = match.params.missionId
   
  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);  

  const fetchMission = async () => {
    try {
      // 요청이 시작 할 때에는 error 초기화하고
      setError(null);
      setMission(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/mission/${missionId}`
      );
      setMission(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMission();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>
  if (!mission) return null;

  return(
    
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
          <hr className={styles.line}/>
        </div>
        <div className={styles.data}>
          <ul className={styles.counttitle}>달성 수치</ul>
          <div className={styles.metadata}>
            <div className={styles.count}>726</div>
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
        <button className={styles.button} type="submit">광고 보러 가기</button>
      </div>
    </section>
    <section>
      <div className={styles.midline}>
        <button className={styles.btn}>게시물 정보</button>
        <button className={styles.btn}>좋아요 누른 사람들</button>
      </div>
    </section>
  </container>
  )
};

export default Misson;
