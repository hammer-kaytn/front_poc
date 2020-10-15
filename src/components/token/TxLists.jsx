import React, { useState, useEffect } from 'react';
import styles from './txlist.module.css';

const TxLists = ({ address }) => {
  const axios = require('axios');
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
      const response = await axios.get(
        `http://localhost:5000/api/transfers/${address}`,
      );
      setTxlists(response.data.items);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTxlists();
  }, [address]);

  return (
    <div>
      <table className={styles.txlists}>
        <thead>
          <tr>
            <th>TX HASH</th>
            <th>보낸주소</th>
            <th>받은주소</th>
            <th>토큰수량</th>
          </tr>
        </thead>

        {txlists &&
          txlists.map((txlist) => (
            <tbody key={txlist.index}>
              <tr>
                <td>
                  <a
                    href={`https://baobab.scope.klaytn.com/tx/${txlist.transactionHash}?tabId=kctTransfer`}
                    target="_blank"
                  >
                    {txlist.transactionHash.substring(0, 10)}...
                  </a>
                </td>
                <td>{txlist.from.substring(0, 10)}...</td>
                <td>{txlist.to.substring(0, 10)}...</td>
                <td>{txlist.value}</td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default TxLists;
