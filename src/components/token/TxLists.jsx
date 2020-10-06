import React, { useState, useEffect } from "react";

import Table from "react-bootstrap/Table";

export default function TableList() {
  const axios = require("axios");
  const [txlists, setTxlists] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTxlists = async () => {
    try {
      // 요청이 시작 할 때에는 error 초기화하고
      setError(null);
      setTxlists(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/transfers");
      setTxlists(response.data.items);
      console.log(response.data.items);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTxlists();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!txlists) return null;

  return (
    <div>
      <Table aria-label="simple table">
        <thead>
          <tr>
            <th>
              <b>TX HASH</b>
            </th>
            <th>
              <b>보낸주소</b>
            </th>
            <th>
              <b>받은주소</b>
            </th>
            <th>
              <b>토큰수량</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {txlists.map((txList) => (
            <tr key={txList.id}>
              <th component="th" scope="row">
                <a
                  href={`https://baobab.scope.klaytn.com/tx/${txList.transactionHash}?tabId=kctTransfer`}
                  target="_blank"
                >
                  {txList.transactionHash.substring(0, 10)}...
                </a>
              </th>
              <th align="center">{txList.from.substring(0, 10)}...</th>
              <th align="center">{txList.to.substring(0, 10)}...</th>
              <th align="center">{txList.value}</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
