import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "../Sidebar";

const Mymission = ({ address, balance, tokenSymbol, tokenBalance }) => {
  return (
    <div>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mymission;
