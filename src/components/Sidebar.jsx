import React from 'react';
import styles from './sidebar.module.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ address, balance, tokenBalance, tokenSymbol }) => {
  const addrStr = `${address}`.substring(0, 10);
  return (
    <div className={styles.sidebar}>
      <FontAwesomeIcon icon={faUser} className="icon-size" />
      <p className="font-bold-700 font-1H padding-top-1e">지갑 정보</p>
      <p className="font-color-lightgray">{addrStr}...</p>
      <p className="font-color-lightgray">
        {tokenBalance} {tokenSymbol}
      </p>
      <p className="font-color-lightgray">{balance} KLAY</p>
      <Link to="/mypage/token">토큰 관리</Link>
      <Link to="/mypage/mymission">내 미션 현황</Link>
      <Link to="/mypage/myaccount">휴대폰 본인 인증</Link>
    </div>
  );
};

export default Sidebar;
