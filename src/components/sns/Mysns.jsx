import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "../Sidebar";
import "./Mysns.scss";

const Mysns = ({ address, balance, tokenSymbol, tokenBalance }) => {
  const axios = require("axios");
  const setAddress = { address };
  const [accounts, setAccounts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [snsAccount, setSnsaccount] = useState("");

  const onChange = (e) => {
    setSnsaccount(e.target.value);
  };

  const onSubmit = (e) => {
    const obj = {
      account: setAddress.address,
      snsAccount: snsAccount,
    };
    axios.post("http://localhost:5000/api/accounts", obj).then(
      (res) => console.log(res.data)
      //<Redirect to="/participate" />
      //document.location.href = "/mypage/mysns/";
    );
    //e.preventDefault();
  };

  const onModify = (e) => {
    const obj = {
      account: setAddress.address,
      snsAccount: snsAccount,
    };
    axios.post("http://localhost:5000/api/accounts/update", obj).then(
      (res) => console.log(res.data)

      //<Redirect to="/participate" />
    );
    //e.preventDefault();
  };

  const fetchAccounts = async () => {
    try {
      // 요청이 시작 할 때에는 error 초기화하고
      setError(null);
      setAccounts(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/accounts/${address}`
      );
      setAccounts(response.data);
      // console.log(accounts);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAccounts();
  }, [address]);

  if (loading) return <div>로딩중..</div>;
  if (error)
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
              <form className="Insert" onSubmit={onSubmit}>
                <p className="font-bold-700 font-1H padding-top-1e font-color-lightgray">
                  SNS 계정 연결
                </p>
                <div className="align-center padding-btm-1e">
                  당신의 지갑 주소 : {address}
                </div>
                <div className="align-center padding-btm-1e">
                  연결할 SNS 계정 주소 :
                  <input
                    required
                    value={snsAccount}
                    onChange={onChange}
                  ></input>
                </div>
                <div className="align-center">
                  <button className="snsbutton" type="submit">
                    연결
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  if (!accounts) return null;

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
            <form className="Modify" onSubmit={onModify}>
              <p className="font-bold-700 font-1H padding-top-1e font-color-lightgray">
                SNS 계정 연결
              </p>
              <div className="align-center padding-btm-1e">
                당신의 지갑 주소 : {address}
              </div>
              <div className="align-center padding-btm-1e">
                수정할 SNS 계정 주소 :{" "}
                <input
                  required
                  placeholder={accounts.snsAccount}
                  onChange={onChange}
                ></input>
              </div>
              <div className="align-center">
                <button className="snsbutton" type="submit">
                  수정
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mysns;
