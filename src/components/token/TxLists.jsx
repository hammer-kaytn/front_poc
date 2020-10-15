import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './txlist.module.css';
import * as config from '../../config';

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;

const TxLists = ({ address }) => {
  const [txlists, setTxlists] = useState(null);

  useEffect(() => {
    const fetchTxlists = async () => {
      try {
        setTxlists(null);
        const response = await axios.get(
          `http://localhost:5000/api/transfers/${address}`,
        );
        setTxlists(response.data.items);
      } catch (e) {
        console.log(e);
      }
      // setLoading(false);
    };
    fetchTxlists();
  }, [address]);

  return (
    <div>
      <table className={styles.txlists}>
        <thead>
          <tr>
            <th>No</th>
            <th>TX HASH</th>
            <th>보낸계정</th>
            <th>받은계정</th>
            <th>토큰수량</th>
          </tr>
        </thead>

        {txlists &&
          txlists.map((txlist, index) => (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>
                  <a
                    href={`https://baobab.scope.klaytn.com/tx/${txlist.transactionHash}?tabId=kctTransfer`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {txlist.transactionHash.substring(0, 10)}...
                  </a>
                </td>
                <td>
                  {txlist.from === '0x0000000000000000000000000000000000000000'
                    ? '하트링크♥'
                    : txlist.from === address
                    ? '나'
                    : txlist.from === DEPLOYED_ADDRESS
                    ? '하트링크♥'
                    : `${txlist.from.substring(0, 10)}...`}
                </td>
                <td>
                  {txlist.to === '0x0000000000000000000000000000000000000000'
                    ? '하트링크♥'
                    : txlist.to === address
                    ? '나'
                    : txlist.to === DEPLOYED_ADDRESS
                    ? '하트링크♥'
                    : `${txlist.to.substring(0, 10)}...`}
                </td>
                <td>{txlist.value}</td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default TxLists;
