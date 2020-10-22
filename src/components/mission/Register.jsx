import React, { useState } from 'react';
import caver from '../../klaytn/caver';
import { Container } from 'reactstrap';
import './Register.scss';
import * as config from '../../config';

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;
const DEPLOYED_ABI = config.DEPLOYED_ABI;
let missionId;

const Register = ({ address, tokenBalance }) => {
  const axios = require('axios');
  // const setAddress = address;
  const [category, setCategory] = useState('fashion');
  const [page, setPage] = useState(null);
  const [tag, setTag] = useState(null);
  const [goal, setGoal] = useState(0);
  const [reward, setReward] = useState(0);
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState(null);
  const [content, setContent] = useState(null);

  const contract = new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS);
  // const [from, setFrom] = useState("");
  // const [to, setTo] = useState(DEPLOYED_ADDRESS);
  // const [value, setValue] = useState("");
  // const [gas, setGas] = useState(300000);
  let gas = 300000;

  const onCategory = (e) => {
    setCategory(e.target.value);
  };

  const onPage = (e) => {
    setPage(e.target.value);
  };

  const onTag = (e) => {
    setTag(e.target.value);
  };

  const onGoal = (e) => {
    setGoal(e.target.value);
  };

  const onReward = (e) => {
    setReward(e.target.value);
  };

  const onTitle = (e) => {
    setTitle(e.target.value);
  };

  const onImage = (e) => {
    setImage(e.target.value);
  };

  const onContent = (e) => {
    setContent(e.target.value);
  };

  const onRegister = async (e) => {
    const from = address;
    const token = tokenBalance;
    const amount = caver.utils.toPeb(reward, 'KLAY');
    if (address === '') {
      alert('카이카스 연결을 먼저 해 주세요.');
    } else if (title === null) {
      alert('제목을 입력해 주세요.');
    } else if (content === null) {
      alert('내용을 입력해 주세요.');
    } else if (image === null) {
      alert('이미지 주소를 입력해 주세요.');
    } else if (page === null) {
      alert('목표 페이지 주소를 입력해 주세요.');
    } else if (tag === null) {
      alert('검색용 태그를 입력해 주세요.');
    } else if (goal <= 0) {
      alert('목표 좋아요 개수를 정확히 입력해 주세요.');
    } else if (reward <= 0) {
      //원래는 reward <=0 입력해야 하나 테스트 상 0 입력하기 위해 진행
      alert('마케팅 보상 수량을 정확히 입력해 주세요.');
    } else if (parseInt(reward) > parseInt(token)) {
      alert(`보유 토큰이 부족합니다. 현재 보유 토큰 : ${token}`);
    } else {
      contract.methods
        .createAdvertise(goal, amount)
        .send({
          from,
          gas,
        })
        .on('transactionHash', (transactionHash) => {
          console.log('txHash', transactionHash);
        })
        .on('receipt', async (receipt) =>
          console.log(
            'receipt',
            receipt,
          )(
            (missionId = await receipt.events.GeneratedMission.returnValues
              ._id),
          ),
        )
        .on('error', (error) => {
          console.log('error', error);
        })
        .then(async () => {
          alert('블록에 정보 저장을 성공하였습니다.');
          await onSubmit();
        });
    }
  };

  const onSubmit = async (e) => {
    const obj = {
      category: await category,
      account: await address,
      page: await page,
      tag: await tag,
      goal: await goal,
      reward: await reward,
      missionId: await missionId,
      title: await title,
      image: await image,
      content: await content,
    };
    console.log(obj);

    axios
      .post('http://localhost:5000/api/mission', obj)
      .then(
        (res) => console.log(res.data),
        alert('데이터 베이스에 정상적으로 등록 되었습니다')(
          (document.location.href = `/mission/${missionId}`),
        ),
      );
    //e.preventDefault();
  };

  return (
    <Container>
      <div className="register">
        {/* {gas ? gas : <li>가스 없음</li>} */}
        <div
          style={{ marginRight: '19.3%', marginLeft: '19.3%', marginTop: '5%' }}
        >
          <label className="label-text">카테고리</label>
          <select className="select margin-bottom-1e" onChange={onCategory}>
            <option className="option" value="패션">
              패션
            </option>
            <option value="IT">IT</option>
            <option value="음식">음식</option>
            <option value="뷰티">뷰티</option>
            <option value="홈리빙">홈리빙</option>
            <option value="여행">여행</option>
            <option value="스포츠">스포츠</option>
            <option value="반려동물">반려동물</option>
            <option value="모임">모임</option>
            <option value="공연">공연</option>
            <option value="교육">교육</option>
            <option value="게임">게임</option>
          </select>

          <label className="label-text">등록할 계정 주소</label>
          <input
            disabled
            className="input-text"
            type="text"
            value={address}
            style={{ marginRight: '19%' }}
          ></input>
          <label className="label-text">제목</label>
          <input
            type="text"
            className="input-text"
            placeholder="제목"
            onChange={onTitle}
          ></input>
          <label className="label-text">내용</label>
          <input
            type="text"
            className="input-text"
            placeholder="내용"
            onChange={onContent}
          ></input>

          <label className="label-text">이미지</label>
          <input
            type="text"
            className="input-text"
            placeholder="이미지 소스 (ex: http://....)"
            onChange={onImage}
          ></input>

          <label className="label-text">페이지 주소</label>
          <input
            type="text"
            className="input-text"
            placeholder="목표 페이지 주소 (ex: http://....)"
            onChange={onPage}
          ></input>

          <label className="label-text">검색용 태그</label>
          <input
            className="input-text"
            type="text"
            placeholder="검색용 태그 (ex: @...)"
            onChange={onTag}
          ></input>

          <label className="label-text">목표 좋아요 개수</label>
          <input
            className="number"
            type="number"
            placeHolder="0"
            onChange={onGoal}
          ></input>

          <label className="label-text">마케팅 보상 토큰</label>
          <input
            className="number"
            type="number"
            placeHolder="0"
            onChange={onReward}
          ></input>
          <input
            className="regbutton"
            type="button"
            value="등록하기"
            onClick={onRegister}
          ></input>
        </div>
      </div>
    </Container>
  );
};

export default Register;
