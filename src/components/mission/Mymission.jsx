import React,{useState,useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "../Sidebar";

const Mymission = ({ address, balance, tokenSymbol, tokenBalance }) => {
  const axios = require("axios");
  // const setAddress = { address };
  const [mymissions, SetMymissions] = useState([])
  const [myparticipated, SetMyparticipated] = useState([])
  
  const getMissions = async () => {    
    try {
      let account = {address}.address
      const mymissions = await axios.get(`http://localhost:5000/api/accounts/${account}`)
      console.log(mymissions.data.participateList)
      SetMymissions(mymissions.data.participateList)    
    } catch (error) {
      console.log(error)
    }
  }

  const getParticipated = async () => {
    try {
      let account = {address}.address
    const myparticipated = await axios.get(`http://localhost:5000/api/mission/account/${account}`)
    SetMyparticipated(myparticipated.data) 
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(() => {
    getMissions();
    getParticipated();
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
          
            <h6>내 참여 미션</h6>
            {mymissions &&
            mymissions.map((mission) => (               
              <ol key={mission._id}>
              <li><a href={`/mission/${mission.missionId}`}>{mission.missionId}</a></li>
              </ol>
            ))}

            <h6>내 등록 미션</h6>
            {myparticipated &&
            myparticipated.map((mission) => (               
              <ol key={mission._id}>
              <li><a href={`/mission/${mission.missionId}`}>{mission.missionId}</a></li>
              </ol>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mymission;
