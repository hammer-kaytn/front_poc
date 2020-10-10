import React, {Component} from "react";
import styles from "./List.module.css";
import { Link } from "react-router-dom";



const List = ({
  id,
  title,
  image,
  category,
  goal,
  reward,
  tag,
  account,
  length,
}) => {
  
  return (
    <>
    <Link to ={{pathname: `/mission/${id}`, state : {id, title, image, category, goal, reward, tag}}}>
      <section className={styles.container}>
        <div className={styles.mission}>
          <img className={styles.img} src={image} />
          {/* <div className={styles.deadline}>{deadline}</div> */}
          <h5 className={styles.title}>{title} </h5>
          <h5 className={styles.category}>{category}</h5>
          <h3 className={styles.goal}>{goal}</h3>
          <h3 className={styles.reward}>{reward}</h3>
          <h3 className={styles.tag}>{tag}</h3>
          {/* <h3 className={styles.account}>{account}</h3> */}

          {/* <p className={styles.summary}>dddddddd</p> */}
        </div>
      </section>
      </Link>
    </>
  );
};

export default List;
