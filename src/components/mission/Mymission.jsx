import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from '../Sidebar';
import styles from '../token/txlist.module.css';

const Mymission = ({ address, balance, tokenSymbol, tokenBalance }) => {
  const axios = require('axios');
  const [mymissions, SetMymissions] = useState([]);
  const [myparticipated, SetMyparticipated] = useState([]);

  const getMissions = async () => {
    try {
      let account = { address }.address;
      // 내가 참여한 미션 확인하는 함수
      const mymissions = await axios.get(
        `http://localhost:5000/api/mission/participateList/${account}`,
      );
      SetMymissions(mymissions.data);

      //내가 등록한 미션 확인하는 함수
      const myparticipated = await axios.get(
        `http://localhost:5000/api/mission/account/${account}`,
      );
      SetMyparticipated(myparticipated.data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getMissions();
  }, [address]);

  return (
    <div className="padding-top-4e">
      <Container>
        <Row>
          <Col xs={12} sm={4} md={2}>
            <Sidebar
              address={address}
              balance={balance}
              tokenSymbol={tokenSymbol}
              tokenBalance={tokenBalance}
            />
          </Col>
          <Col xs={12} sm={8} md={10}>
            <p className="font-bold-700 font-1H padding-top-1e font-color-lightgray">
              내 미션 현황
            </p>

            <div>
              <h6 className="font-bold-700 padding-top-1e font-color-lightgray">
                내 참여 미션
              </h6>
              <table className={styles.txlists}>
                <thead>
                  <tr>
                    <th className={styles.category}>카테고리</th>
                    <th className={styles.title}>제목</th>
                    <th className={styles.liked}>미션 진행상황(현재/목표)</th>
                    <th className={styles.status}>상태</th>
                  </tr>
                </thead>

                {mymissions &&
                  mymissions.map((mission) => (
                    <tbody key={mission._id}>
                      <tr>
                        <td>{mission.category}</td>
                        <td>
                          <a
                            className={styles.titlelink}
                            href={`/mission/${mission.missionId}`}
                          >
                            {mission.title}
                          </a>
                        </td>
                        <td>
                          {mission.likes} / {mission.goal}
                        </td>
                        <td>{mission.status}</td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>

            <div>
              <h6 className="font-bold-700 padding-top-1e font-color-lightgray">
                내 등록 미션
              </h6>
              <table className={styles.txlists}>
                <thead>
                  <tr>
                    <th className={styles.category}>카테고리</th>
                    <th className={styles.title}>제목</th>
                    <th className={styles.liked}>미션 진행상황(현재/목표)</th>
                    <th className={styles.status}>상태</th>
                  </tr>
                </thead>

                {myparticipated &&
                  myparticipated.map((mission) => (
                    <tbody key={mission._id}>
                      <tr>
                        <td>{mission.category}</td>
                        <td>
                          <a
                            className={styles.titlelink}
                            href={`/mission/${mission.missionId}`}
                          >
                            {mission.title}
                          </a>
                        </td>
                        <td>
                          {mission.likes} / {mission.goal}
                        </td>
                        <td>{mission.status}</td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mymission;
