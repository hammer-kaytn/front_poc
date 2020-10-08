import React from "react";
import styles from "./header.module.css";
import logo from "../logo.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = ({ address }) => {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.navbarCenter}>
          <img src={logo}></img>
        </div>

        <Link to="/participate">참여하기</Link>
        <Link to="/register">등록하기</Link>

        <div className={styles.navbarRight}>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>
              마이페이지
              <i class="fa fa-caret-down"></i>
            </button>
            <div className={styles.dropdownContent}>
              <Link to="/mypage/mysns">SNS 계정 연결</Link>
              <Link to="/mypage/mymission">내 미션 현황</Link>
              <Link to="/mypage/token">토큰 관리</Link>
            </div>
          </div>
          {address ? (
            <span>{address}님 안녕하세요</span>
          ) : (
            <a href="#about">카이카스 연결</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
