import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from '../Sidebar';
import TransferToken from './TransferToken';
import ChangeToken from './ChangeToken';
import BuyToken from './BuyToken';
import TxLists from './TxLists';

const Token = ({ address, balance, tokenSymbol, tokenBalance }) => {
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
            <BuyToken address={address} balance={balance} />
            <TransferToken address={address} tokenBalance={tokenBalance} />
            <ChangeToken address={address} tokenBalance={tokenBalance} />
            <TxLists address={address} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Token;
