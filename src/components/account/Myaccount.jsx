import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from '../Sidebar';
import Auth from './Auth';

const Myaccount = ({ address, balance, tokenSymbol, tokenBalance }) => {
  const axios = require('axios');
  // const setAddress = { address };
  const [accounts, setAccounts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const [phoneNumber, setPhoneNumber] = useState("");

  const fetchAccounts = async () => {
    try {
      // 요청이 시작 할 때에는 error 초기화하고
      setError(null);
      setAccounts(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/accounts/${address}`,
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
              {/* 휴대폰 본인 인증 페이지 렌더링 */}
              <Auth address={address} />
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
            <div>
              {address}
              <p>회원님은 이미 휴대폰 본인 인증을 받았습니다 :)</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Myaccount;
