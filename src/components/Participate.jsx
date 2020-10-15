import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';
import styles from './Participate.module.css';
import Mission from './Mission';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';

const Participate = () => {
  const [fashions, SetFashions] = useState([]);
  const [its, SetIts] = useState([]);
  const [foods, SetFoods] = useState([]);

  const getItems = async () => {
    const fashion = await axios.get(
      'http://localhost:5000/api/mission/list/fashion',
    );
    const it = await axios.get('http://localhost:5000/api/mission/list/it');
    const food = await axios.get('http://localhost:5000/api/mission/list/food');

    SetFashions(fashion.data);
    SetIts(it.data);
    SetFoods(food.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <container className={styles.categorylist}>
      <div className="padding-top-4e">
        <div id="fashion" className={styles.categoryWhite}>
          <p className="font-bold-700 font-1H font-color-lightgray">패션</p>
          <span className={styles.intro}>
            <span className={styles.intro2}>{fashions.length}</span>개의 미션이
            있습니다.
          </span>
          <section className={styles.container}>
            <div className={styles.missions}>
              <Carousel itemsToShow={3} transitionMs={200}>
                {fashions &&
                  fashions.map((fashion) => (
                    <Link to={`/mission/${Mission._missionId}`}>
                      <List
                        key={fashion._id}
                        id={fashion._id}
                        goal={fashion.goal}
                        likes={fashion.likes}
                        title={fashion.title}
                        image={fashion.image}
                        category={fashion.category}
                        tag={fashion.tag}
                        reward={fashion.reward}
                        account={fashion.account}
                        missionId={fashion.missionId}
                        content={fashion.content}
                        create_date={fashion.create_date}
                        status={fashion.status}
                      />
                    </Link>
                  ))}
              </Carousel>
            </div>
          </section>
        </div>

        <div id="it" className={styles.categoryGray}>
          <p className="font-bold-700 font-1H font-color-lightgray">IT</p>
          <span className={styles.intro}>
            <span className={styles.intro2}>{its.length}</span>개의 미션이
            있습니다.
          </span>
          <section className={styles.container}>
            <div className={styles.missions}>
              <Carousel itemsToShow={3} transitionMs={200}>
                {its &&
                  its.map((it) => (
                    <Link to={`/mission/${Mission._missionId}`}>
                      <List
                        key={it._id}
                        id={it._id}
                        goal={it.goal}
                        likes={it.likes}
                        title={it.title}
                        image={it.image}
                        category={it.category}
                        tag={it.tag}
                        reward={it.reward}
                        account={it.account}
                        missionId={it.missionId}
                        content={it.content}
                        create_date={it.create_date}
                        status={it.status}
                      />
                    </Link>
                  ))}
              </Carousel>
            </div>
          </section>
        </div>

        <div id="food" className={styles.categoryWhite}>
          <p className="font-bold-700 font-1H font-color-lightgray">음식</p>
          <span className={styles.intro}>
            <span className={styles.intro2}>{foods.length}</span>개의 미션이
            있습니다.
          </span>
          <section className={styles.container}>
            <div className={styles.missions}>
              <Carousel itemsToShow={3} transitionMs={200}>
                {foods &&
                  foods.map((food) => (
                    <Link to={`/mission/${Mission._missionId}`}>
                      <List
                        key={food._id}
                        id={food._id}
                        goal={food.goal}
                        likes={food.likes}
                        title={food.title}
                        image={food.image}
                        category={food.category}
                        tag={food.tag}
                        reward={food.reward}
                        account={food.account}
                        missionId={food.missionId}
                        content={food.content}
                        create_date={food.create_date}
                        status={food.status}
                      />
                    </Link>
                  ))}
              </Carousel>
            </div>
          </section>
        </div>
      </div>
    </container>
  );
};

export default Participate;
