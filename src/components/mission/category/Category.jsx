import React from 'react';
import styles from './category.module.css';
import total from './category_images/total.png';
import beauty from './category_images/beauty.png';
import concert from './category_images/concert.png';
import food from './category_images/food.png';
import game from './category_images/game.png';
import it from './category_images/it.png';
import homeliving from './category_images/homeliving.png';
import pet from './category_images/pet.png';
import travel from './category_images/travel.png';
import sports from './category_images/sports.png';
import fashion from './category_images/fashion.png';
import meeting from './category_images/meeting.png';
import study from './category_images/study.png';

const Category = ({ onCategory }) => {
  return (
    <div className={styles.category}>
      <div>
        <img
          className={styles.categoryimage}
          src={total}
          alt="Total"
          name="all"
          onClick={onCategory}
        />
        <a
          className={styles.categoryBtn}
          href="#all"
          name="all"
          onClick={onCategory}
        >
          전체보기
        </a>
      </div>
      <div className={styles.categorybox}>
        <img
          className={styles.categoryimage}
          src={fashion}
          alt="Fashion"
          name="fashion"
          onClick={onCategory}
        />
        <a
          className={styles.categoryBtn}
          href="#fashion"
          name="fashion"
          onClick={onCategory}
        >
          패션
        </a>
      </div>
      <div className={styles.categorybox}>
        <img
          className={styles.categoryimage}
          src={it}
          alt="IT"
          name="it"
          onClick={onCategory}
        />
        <a
          className={styles.categoryBtn}
          href="#it"
          name="it"
          onClick={onCategory}
        >
          IT
        </a>
      </div>
      <div className={styles.categorybox}>
        <img
          className={styles.categoryimage}
          src={food}
          alt="Food"
          name="food"
          onClick={onCategory}
        />
        <a
          className={styles.categoryBtn}
          href="#food"
          name="food"
          onClick={onCategory}
        >
          음식
        </a>
      </div>
      <div className={styles.categorybox}>
        <img
          className={styles.categoryimage}
          src={beauty}
          alt="Beauty"
          name="beauty"
          onClick={onCategory}
        />
        <a
          className={styles.categoryBtn}
          href="#beauty"
          name="beauty"
          onClick={onCategory}
        >
          뷰티
        </a>
      </div>
      <div className={styles.categorybox}>
        <img
          className={styles.categoryimage}
          src={homeliving}
          alt="Home Living"
          name="living"
          onClick={onCategory}
        />
        <a
          className={styles.categoryBtn}
          href="#living"
          name="living"
          onClick={onCategory}
        >
          홈리빙
        </a>
      </div>
      <div className={styles.categorybox}>
        <img
          className={styles.categoryimage}
          src={travel}
          alt="Travel"
          name="trip"
          onClick={onCategory}
        />
        <a
          className={styles.categoryBtn}
          href="#trip"
          name="trip"
          onClick={onCategory}
        >
          여행
        </a>
      </div>
      <div className={styles.categorybox}>
        <img
          className={styles.categoryimage}
          src={sports}
          alt="Sports"
          name="sport"
          onClick={onCategory}
        />
        <a
          className={styles.categoryBtn}
          href="#sport"
          name="sport"
          onClick={onCategory}
        >
          스포츠
        </a>
      </div>
      <div className={styles.categorybox}>
        <img
          className={styles.categoryimage}
          src={pet}
          alt="Pet"
          name="pet"
          onClick={onCategory}
        />
        <a
          className={styles.categoryBtn}
          href="#pet"
          name="pet"
          onClick={onCategory}
        >
          반려동물
        </a>
      </div>
      <div className={styles.categorybox}>
        <img
          className={styles.categoryimage}
          src={meeting}
          alt="Meeting"
          name="meet"
          onClick={onCategory}
        />
        <a
          className={styles.categoryBtn}
          href="#meet"
          name="meet"
          onClick={onCategory}
        >
          모임
        </a>
      </div>
      <div className={styles.categorybox}>
        <img
          className={styles.categoryimage}
          src={concert}
          alt="Concert"
          name="concert"
          onClick={onCategory}
        />
        <a
          className={styles.categoryBtn}
          href="#concert"
          name="concert"
          onClick={onCategory}
        >
          공연
        </a>
      </div>
      <div className={styles.categorybox}>
        <img
          className={styles.categoryimage}
          src={study}
          alt="Study"
          name="edu"
          onClick={onCategory}
        />
        <a
          className={styles.categoryBtn}
          href="#edu"
          name="edu"
          onClick={onCategory}
        >
          교육
        </a>
      </div>
      <div className={styles.categorybox}>
        <img
          className={styles.categoryimage}
          src={game}
          alt="Game"
          name="game"
          onClick={onCategory}
        />
        <a
          className={styles.categoryBtn}
          href="#game"
          name="game"
          onClick={onCategory}
        >
          게임
        </a>
      </div>
    </div>
  );
};

export default Category;
