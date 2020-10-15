import React from 'react';
import styles from './List.module.css';
import { Link } from 'react-router-dom';

const List = ({
  id,
  title,
  image,
  category,
  goal,
  reward,
  tag,
  likes,
  missionId,
  content,
  create_date,
  status,
}) => {
  return (
    <>
      <Link
        to={{
          pathname: `/mission/${missionId}`,
        }}
      >
        <section className={styles.container}>
          <div className={styles.mission}>
            <img className={styles.img} src={image} />
            <h5 className={styles.title}>{title} 타이틀 </h5>
            <h5 className={styles.categoryandtag}>
              {category} | {tag}{' '}
            </h5>
            <h3 className={styles.summary}>{content}</h3>
            <hr className={styles.line} />
            <div className={styles.rewarddata}>
              <h3 className={styles.goal}>
                {' '}
                {likes} / {goal}{' '}
              </h3>
              <h3 className={styles.deadline}>{status}</h3>
            </div>
            <h3 className={styles.reward}>{reward} HLT </h3>
          </div>
        </section>
      </Link>
    </>
  );
};

export default List;
