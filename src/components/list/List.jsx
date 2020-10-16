import React from 'react';
import styles from './List.module.css';
import { Link } from 'react-router-dom';
import endImage from './end_image.png';
import ingImage from './ing_image.png';

const List = ({
  title,
  image,
  category,
  goal,
  reward,
  tag,
  likes,
  missionId,
  content,
  status,
  index,
}) => {
  return (
    <>
      <Link
        key={index}
        to={{
          pathname: `/mission/${missionId}`,
        }}
      >
        <section className={styles.container}>
          {status === '종료' ? (
            <img className={styles.statusimage} src={endImage} alt="end" />
          ) : (
            <img className={styles.statusimage} src={ingImage} alt="ing" />
          )}
          <div className={styles.mission}>
            <img className={styles.img} src={image} alt={title} />
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
