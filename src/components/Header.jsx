import React from "react";
import styles from "./header.module.css";
import logo from "../logo.png";
import "./Register.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = ({ address, parentFunc }) => {
  const addrStr = `${address}`.substring(0, 4);

  const loadFunc =()=> {
    parentFunc()
  }
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.navbarCenter}>
          <img src={logo}></img>
        </div>
        <div className={styles.navLink}>
          <Link to="/participate">참여하기</Link>
          <Link to="/register">등록하기</Link>
          </div>

        <div className={styles.navbarRight}>
          
        {address ? (
            <span><p className="font-color-lightgray">{addrStr}...님 안녕하세요</p></span>
          ) : (
            <a href="#login" onClick={loadFunc}>카이카스 연결</a>
          )}
          <div className={styles.dropdown}>
            <button className={styles.dropbtn} >
              마이페이지
              <i class="fa fa-caret-down"></i>
            </button>
            <div className={styles.dropdownContent}>
              <Link to="/mypage/myaccount">휴대폰 본인 인증</Link>
              <Link to="/mypage/mymission">내 미션 현황</Link>
              <Link to="/mypage/token">토큰 관리</Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
