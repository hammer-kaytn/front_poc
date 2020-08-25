import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

const WalletInfo = ({
  address,
  balance,
  tbalance,
  name,
  symbol,
  totalSupply,
}) => {
  return (
    <Form>
      <h4>지갑 정보</h4>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>지갑 주소</th>
            <th>보유 클레이</th>
            <th>토큰이름</th>
            <th>총 공급량</th>
            <th>보유토큰</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{address || "카이카스로 로그인 해 주세요 :)"}</td>
            <td>{balance} KLAY</td>
            <td>{name}</td>
            <td>
              {totalSupply} {symbol}
            </td>
            <td>
              {tbalance} {symbol}
            </td>
          </tr>
        </tbody>
      </Table>
    </Form>
  );
};

export default WalletInfo;
