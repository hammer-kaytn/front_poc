import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ address, balance, tokenBalance, tokenSymbol }) => {
  const addrStr = `${address}`.substring(0, 10);
  return (
    <div className="padding-top-2e align-center">
      <FontAwesomeIcon icon={faUser} className="icon-size" />
      <p className="font-bold-700 font-1H padding-top-1e">지갑 정보</p>
      <p className="font-color-lightgray">{addrStr}...</p>
      <p className="font-color-lightgray">
        {tokenBalance} {tokenSymbol}
      </p>
      <p className="font-color-lightgray">{balance} KLAY</p>
      <div className="line"></div>
      <Link to="/mypage/mysns">SNS 계정 연결</Link>
      <div className="line"></div>
      <Link to="/mypage/mymission">내 참여 현황</Link>
      <div className="line"></div>
      <Link to="/mypage/token">토큰 관리</Link>
    </div>
  );
};

export default Sidebar;
