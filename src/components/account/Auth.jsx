import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./auth.module.css";

let result ="ready"

const Auth = ({ address, balance, tokenSymbol, tokenBalance }) => {
    const axios = require("axios");
    const setAddress = { address };
    const [accounts, setAccounts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const [phoneNumber, setPhoneNumber] = useState("");
    const [verifyNumber, setVerifyNumber] = useState("");
    const [authResult, setAuthResult] = useState("")

    const onPhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const onVerifyChange = (e) => {
        setVerifyNumber(e.target.value);
    };

    const checkPhone = async (e) => { // DB에 폰 번호가 저장되었는지 확인
        e.preventDefault();
        try {
        const checkNumber = await axios.get(`http://localhost:5000/api/accounts/phone/${phoneNumber}`)
        alert("이미 등록된 휴대폰 번호입니다.")
        setPhoneNumber('010')
          
        } catch (error) {
            onAuth(e)
        }
            
       }
    
    const onAuth = (e) =>{ //인증번호 발송 관련 함수        
        const obj = {
            phoneNumber: phoneNumber
          };
        axios.post("http://localhost:5000/api/auth/", obj).then(
          (res) => alert(res.data)
        );
        // e.preventDefault();
    }

    const onVerify = (e) =>{ //인증번호 확인 관련 함수
      const obj = {
        phoneNumber: phoneNumber,
        verifyCode: verifyNumber,
      };
    axios.post("http://localhost:5000/api/auth/verify", obj).then(
      async(res) => await(result = res.data, resultVerify())
    );
    
    e.preventDefault();
        
    }

    const resultVerify =()=>{
        if (result==="fail") {
            alert('인증번호를 정확히 입력 해 주세요.')            
        } else if(result==="success") {
            alert('본인 인증에 성공하였습니다.')
            onSubmit()
        }
    }
    
      const onSubmit = (e) => { //DB에 전화번호 저장 함수
        const obj = {
          account: setAddress.address,
          phoneNumber: phoneNumber,
        };
        axios.post("http://localhost:5000/api/accounts", obj).then(
          (res) => console.log(res.data),
          document.location.href = "/mypage/myaccount/"
        );
        //e.preventDefault();
      };
    
    //   const onModify = (e) => { //DB 수정 함수
    //     const obj = {
    //       account: setAddress.address,
    //       phoneNumber: phoneNumber,
    //     };
    //     axios.post("http://localhost:5000/api/accounts/update", obj).then(
    //       (res) => console.log(res.data)
    
    //       //<Redirect to="/participate" />
    //     );
    //     //e.preventDefault();
    //   };

    return (

            <Col xs={12} sm={8} md={10}>
                <p className="font-bold-700 font-1H padding-top-1e font-color-lightgray">
                  휴대폰 본인 인증
                </p>
                <div className="align-center padding-btm-1e">
                  당신의 지갑 주소 : {address}
                </div>

              <form className="Auth" onSubmit={checkPhone}>                
                <div className="align-center">                  
                  <input
                  className={styles.authinput}
                    required
                    placeholder="휴대폰 번호를 - 없이 입력하세요"
                    value={phoneNumber}
                    type="tel" id="phone" name="phone" pattern="[010]{3}[0-9]{4}[0-9]{4}"
                    onChange={onPhoneChange}
                  ></input>
                </div>
                <div className="align-center padding-btm-1e">
                  <button className={styles.authbtn} type="submit">
                    인증번호 발송
                  </button>
                </div>
              </form>

              <form className="Verify" onSubmit={onVerify}>                
                <div className="align-center ">                  
                  <input
                  className={styles.authinput}
                    required
                    placeholder="인증번호를 입력해 주세요"
                    value={verifyNumber}
                    type="number" id="verify" name="verify" min="100000" max="999999"
                    onChange={onVerifyChange}
                  ></input>
                </div>
                <div className="align-center">
                  <button className={styles.authbtn} type="submit">
                    인증번호 확인
                  </button>
                </div>
              </form>
            </Col>

    );
};

export default Auth;