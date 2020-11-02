import React from 'react';
import List from '../list/List';
import styles from './selected.module.css';
import Mission from '../Mission';
import { Link } from 'react-router-dom';
// import Carousel from 'react-elastic-carousel'; 슬라이드바 라이브러리

const Selected = ({ key, category, name }) => {
  return (
    <div id={key}>
      <p className="font-bold-700 font-1H font-color-lightgray">{name}</p>
      <span className={styles.intro}>
        <span className={styles.intro2}>{category.length}</span>개의 미션이
        있습니다.
      </span>
      <section>
        <div className={styles.missions}>
          {category &&
            category.map((selected, index) => (
              <Link to={`/mission/${Mission._missionId}`}>
                <List
                  key={index}
                  id={selected._id}
                  goal={selected.goal}
                  likes={selected.likes}
                  title={selected.title}
                  image={selected.image}
                  category={selected.category}
                  tag={selected.tag}
                  reward={selected.reward}
                  account={selected.account}
                  missionId={selected.missionId}
                  content={selected.content}
                  create_date={selected.create_date}
                  status={selected.status}
                />
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Selected;
