import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Participate.module.css';
import Category from './category/Category';
import Selected from './category/Selected';

const Participate = () => {
  const [category, SetCategory] = useState('all');
  const [recent, SetRecents] = useState([]);
  const [alls, SetAlls] = useState([]);
  const [fashions, SetFashions] = useState([]);
  const [its, SetIts] = useState([]);
  const [foods, SetFoods] = useState([]);
  const [beautys, SetBeautys] = useState([]);
  const [livings, SetLivings] = useState([]);
  const [trips, SetTrips] = useState([]);
  const [sports, SetSports] = useState([]);
  const [pets, SetPets] = useState([]);
  const [meets, SetMeets] = useState([]);
  const [concerts, SetConcerts] = useState([]);
  const [edus, SetEdus] = useState([]);
  const [games, SetGames] = useState([]);

  const getItems = async () => {
    const all = await axios.get('http://localhost:5000/api/mission/list');
    const recent = await axios.get(
      'http://localhost:5000/api/mission/lists/recent',
    );

    SetRecents(recent.data); // 미션의 상태가 진행중 이면서 최근 5개만 저장
    SetAlls(all.data);

    const fashion = all.data.filter((element) => {
      return element.category === 'fashion';
    });
    const it = all.data.filter((element) => {
      return element.category === 'it';
    });
    const food = all.data.filter((element) => {
      return element.category === 'food';
    });
    const beauty = all.data.filter((element) => {
      return element.category === 'beauty';
    });
    const living = all.data.filter((element) => {
      return element.category === 'living';
    });
    const trip = all.data.filter((element) => {
      return element.category === 'trip';
    });
    const sport = all.data.filter((element) => {
      return element.category === 'sport';
    });
    const pet = all.data.filter((element) => {
      return element.category === 'pet';
    });
    const meet = all.data.filter((element) => {
      return element.category === 'meet';
    });
    const concert = all.data.filter((element) => {
      return element.category === 'concert';
    });
    const edu = all.data.filter((element) => {
      return element.category === 'edu';
    });
    const game = all.data.filter((element) => {
      return element.category === 'game';
    });

    SetFashions(fashion);
    SetIts(it);
    SetFoods(food);
    SetBeautys(beauty);
    SetLivings(living);
    SetTrips(trip);
    SetSports(sport);
    SetPets(pet);
    SetMeets(meet);
    SetConcerts(concert);
    SetEdus(edu);
    SetGames(game);
  };

  const onCategory = (e) => {
    SetCategory(e.target.name);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className={styles.categorylist}>
      <div className="padding-top-4e">
        <Category onCategory={onCategory} />
        {category === 'all' ? (
          <Selected key={category} category={alls} name="전체보기" />
        ) : (
          ''
        )}
        {category === 'fashion' ? (
          <Selected category={fashions} name="패션" />
        ) : (
          ''
        )}
        {category === 'it' ? <Selected category={its} name="IT" /> : ''}
        {category === 'food' ? <Selected category={foods} name="음식" /> : ''}
        {category === 'beauty' ? (
          <Selected category={beautys} name="뷰티" />
        ) : (
          ''
        )}
        {category === 'living' ? (
          <Selected category={livings} name="홈리빙" />
        ) : (
          ''
        )}
        {category === 'trip' ? <Selected category={trips} name="여행" /> : ''}
        {category === 'sport' ? (
          <Selected category={sports} name="스포츠" />
        ) : (
          ''
        )}
        {category === 'pet' ? <Selected category={pets} name="반려동물" /> : ''}
        {category === 'meet' ? <Selected category={meets} name="모임" /> : ''}
        {category === 'concert' ? (
          <Selected category={concerts} name="공연" />
        ) : (
          ''
        )}
        {category === 'edu' ? <Selected category={edus} name="교육" /> : ''}
        {category === 'game' ? <Selected category={games} name="게임" /> : ''}
      </div>
    </div>
  );
};

export default Participate;
