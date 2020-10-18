import React from 'react';
import styles from './category.module.css';

const Category = ({ onCategory }) => {
  return (
    <div className={styles.category}>
      <div>
        <a href="#all" name="all" onClick={onCategory}>
          <img
            name="all"
            onClick={onCategory}
            className={styles.categoryImg}
            src="https://www.flaticon.com/svg/static/icons/svg/3254/3254617.svg"
            alt="Freepik"
          />
          <br></br>
          전체보기
        </a>
      </div>

      <div>
        <a href="#fashion" name="fashion" onClick={onCategory}>
          <img
            name="fashion"
            onClick={onCategory}
            className={styles.categoryImg}
            src="https://www.flaticon.com/svg/static/icons/svg/2946/2946231.svg"
            alt="Freepik"
          />
          <br></br>
          패션
        </a>
      </div>

      <div>
        <a href="#it" name="it" onClick={onCategory}>
          <img
            name="it"
            onClick={onCategory}
            className={styles.categoryImg}
            src="https://www.flaticon.com/svg/static/icons/svg/589/589067.svg"
            alt="Freepik"
          />
          <br></br>
          IT
        </a>
      </div>

      <div>
        <a href="#food" name="food" onClick={onCategory}>
          <img
            name="food"
            onClick={onCategory}
            className={styles.categoryImg}
            src="https://www.flaticon.com/svg/static/icons/svg/1034/1034650.svg"
            alt="Freepik"
          />
          <br></br>
          음식
        </a>
      </div>

      <div>
        <a href="#beauty" name="beauty" onClick={onCategory}>
          <img
            name="beauty"
            onClick={onCategory}
            className={styles.categoryImg}
            src="https://www.flaticon.com/svg/static/icons/svg/1855/1855916.svg"
            alt="Freepik"
          />
          <br></br>
          뷰티
        </a>
      </div>

      <div>
        <a href="#living" name="living" onClick={onCategory}>
          <img
            name="living"
            onClick={onCategory}
            className={styles.categoryImg}
            src="https://www.flaticon.com/svg/static/icons/svg/1335/1335446.svg"
            alt="Freepik"
          />
          <br></br>
          홈리빙
        </a>
      </div>

      <div>
        <a href="#trip" name="trip" onClick={onCategory}>
          <img
            name="trip"
            onClick={onCategory}
            className={styles.categoryImg}
            src="https://www.flaticon.com/svg/static/icons/svg/806/806226.svg"
            alt="Freepik"
          />
          <br></br>
          여행
        </a>
      </div>

      <div>
        <a href="#sport" name="sport" onClick={onCategory}>
          <img
            name="sport"
            onClick={onCategory}
            className={styles.categoryImg}
            src="https://www.flaticon.com/svg/static/icons/svg/942/942014.svg"
            alt="Freepik"
          />
          <br></br>
          스포츠
        </a>
      </div>

      <div>
        <a href="#pet" name="pet" onClick={onCategory}>
          <img
            name="pet"
            onClick={onCategory}
            className={styles.categoryImg}
            src="https://www.flaticon.com/svg/static/icons/svg/2829/2829679.svg"
            alt="Freepik"
          />
          <br></br>
          반려동물
        </a>
      </div>

      <div>
        <a href="#meet" name="meet" onClick={onCategory}>
          <img
            name="meet"
            onClick={onCategory}
            className={styles.categoryImg}
            src="https://www.flaticon.com/svg/static/icons/svg/1759/1759322.svg"
            alt="Freepik"
          />
          <br></br>
          모임
        </a>
      </div>

      <div>
        <a href="#concert" name="concert" onClick={onCategory}>
          <img
            name="concert"
            onClick={onCategory}
            className={styles.categoryImg}
            src="https://www.flaticon.com/svg/static/icons/svg/1313/1313777.svg"
            alt="Freepik"
          />
          <br></br>
          공연
        </a>
      </div>

      <div>
        <a href="#edu" name="edu" onClick={onCategory}>
          <img
            name="edu"
            onClick={onCategory}
            className={styles.categoryImg}
            src="https://www.flaticon.com/svg/static/icons/svg/806/806170.svg"
            alt="Freepik"
          />
          <br></br>
          교육
        </a>
      </div>

      <div>
        <a href="#game" name="game" onClick={onCategory}>
          <img
            name="game"
            onClick={onCategory}
            className={styles.categoryImg}
            src="https://www.flaticon.com/svg/static/icons/svg/806/806133.svg"
            alt="Freepik"
          />
          <br></br>
          게임
        </a>
      </div>
    </div>
  );
};

export default Category;
