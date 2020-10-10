import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Mission.module.css";


async function getMission ({ id }) {
  // const id ={id}
  const response = await axios.get(`http://localhost:5000/api/mission/${id}`);
  const res = response.data
  console.log(res);
}

function Mission ({match}) {
  // console.log(match.params)
  const id = match.params
  // console.log(id)

  /*
  useEffect(() => {
    async function getMission() {
      const response= await axios.get(`http://localhost:5000/api/mission/${id}`);
      const mission = response.data
      console.log(mission);
    }
    getMission();
  }, []);
  */

  getMission(id);

  return(
    <container>
      <section className={styles.detail}>
        <i className={styles.category}>카테고리</i>
      <h1 className={styles.title}>타이틀타이틀타이틀타이틀틀타이틀틀타이틀틀타이틀틀타이틀틀타이틀타이틀타이틀타이틀</h1>
      </section>

    <section className={styles.details}>
      <img className={styles.image} src="https://source.unsplash.com/featured/?water,mountain" alt="detail item image" />
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
            <div className={styles.metacount}>/ 1000❤️</div> 
          </div>
        </div>
        <div className={styles.data}>
          <ul className={styles.counttitle}>총 보상 리워드</ul>
          <div className={styles.metadata}>
            <div className={styles.count}>500</div>
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
}



export default Mission;

