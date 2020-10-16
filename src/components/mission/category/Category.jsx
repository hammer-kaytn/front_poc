import React from 'react';
import styles from './category.module.css';

const Category = ({ onCategory }) => {
  return (
    <div className={styles.category}>
      <a href="#all" name="all" onClick={onCategory}>
        전체보기
      </a>
      <a href="#fashion" name="fashion" onClick={onCategory}>
        패션
      </a>
      <a href="#it" name="it" onClick={onCategory}>
        IT
      </a>
      <a href="#food" name="food" onClick={onCategory}>
        음식
      </a>
      <a href="#beauty" name="beauty" onClick={onCategory}>
        뷰티
      </a>
      <a href="#living" name="living" onClick={onCategory}>
        홈리빙
      </a>
      <a href="#trip" name="trip" onClick={onCategory}>
        여행
      </a>
      <a href="#sport" name="sport" onClick={onCategory}>
        스포츠
      </a>
      <a href="#pet" name="pet" onClick={onCategory}>
        반려동물
      </a>
      <a href="#meet" name="meet" onClick={onCategory}>
        모임
      </a>
      <a href="#concert" name="concert" onClick={onCategory}>
        공연
      </a>
      <a href="#edu" name="edu" onClick={onCategory}>
        교육
      </a>
      <a href="#game" name="game" onClick={onCategory}>
        게임
      </a>
    </div>
  );
};

export default Category;
