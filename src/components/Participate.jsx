import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";
import styles from "./Participate.module.css";
import Mission from "./Mission";
import { Link } from "react-router-dom";

const Participate = () => {
  const [fashions, SetFashions] = useState([])
  const [its, SetIts] = useState([])
  const [foods, SetFoods] = useState([])

  const getItems = async () => {
    const fashion = await axios.get("http://localhost:5000/api/mission/list/fashion")
    const it = await axios.get("http://localhost:5000/api/mission/list/it")
    const food = await axios.get("http://localhost:5000/api/mission/list/food")

    SetFashions(fashion.data)
    SetIts(it.data)
    SetFoods(food.data)
    
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="padding-top-4e">
      <div className={styles.categoryWhite} >
      <p className="font-bold-700 font-1H font-color-lightgray">패션</p>
      <span className={styles.intro}>
        <span className={styles.intro2}>{fashions.length}</span>개의 미션이 있습니다.
      </span>
      <section className={styles.container}>
        <div className={styles.missions}>
          
          {fashions &&
            fashions.map((fashion) => (
               <Link to ={`/mission/${Mission._missionId}`}> 
              <List
              key={fashion._id}
                id={fashion._id}
                goal={fashion.goal}
                title={fashion.title}
                image={fashion.image}
                category={fashion.category}
                tag={fashion.tag}
                reward={fashion.reward}
                account={fashion.account}
                missionId={fashion.missionId}
              />
              </Link>
            ))}
        </div>
      </section>
      </div>

      <div className={styles.categoryGray} >
      <p className="font-bold-700 font-1H font-color-lightgray">IT</p>
      <span className={styles.intro}>
        <span className={styles.intro2}>{its.length}</span>개의 미션이 있습니다.
      </span>
      <section className={styles.container}>
        <div className={styles.missions}>
          
          {its &&
            its.map((it) => (
               <Link to ={`/mission/${Mission._missionId}`}> 
              <List
              key={it._id}
                id={it._id}
                goal={it.goal}
                title={it.title}
                image={it.image}
                category={it.category}
                tag={it.tag}
                reward={it.reward}
                account={it.account}
                missionId={it.missionId}
              />
              </Link>
            ))}
        </div>
      </section>
      </div>

      <div className={styles.categoryWhite} >
      <p className="font-bold-700 font-1H font-color-lightgray">음식</p>
      <span className={styles.intro}>
        <span className={styles.intro2}>{foods.length}</span>개의 미션이 있습니다.
      </span>
      <section className={styles.container}>
        <div className={styles.missions}>
          
          {foods &&
            foods.map((food) => (
               <Link to ={`/mission/${Mission._missionId}`}> 
              <List
              key={food._id}
                id={food._id}
                goal={food.goal}
                title={food.title}
                image={food.image}
                category={food.category}
                tag={food.tag}
                reward={food.reward}
                account={food.account}
                missionId={food.missionId}
              />
              </Link>
            ))}
        </div>
      </section>
      </div>


    </div>
    
  );
};

export default Participate;