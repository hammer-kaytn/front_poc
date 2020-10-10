import React, { useState } from "react";
import axios from "axios";
import List from "./List";
import styles from "./Participate.module.css";
import Mission from "./Mission";
import { Link } from "react-router-dom";

class Participate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missions: [],
      length: null,
    };
  }

  getList = async () => {
    const missions = await axios.get("http://localhost:5000/api/mission/list");
    const dataArr = missions.data;
    // missions.map((r) => console.log(r.goal));
    // console.log(missions.data);
    console.log(dataArr);
    this.setState({ missions: dataArr, length: dataArr.length });
    console.log(dataArr.length);
  };
  componentDidMount() {
    this.getList();
  }

  render() {
    const { length } = this.state;
    
    return (
      <>
        <span className={styles.intro}>
          <span className={styles.intro2}>{length}</span>개의 미션이 있습니다.
        </span>
        <section className={styles.container}>
          <div className={styles.missions}>
            
            {this.state.missions &&
              this.state.missions.map((mission) => (
                <Link to ={`/mission/${Mission._id}`}>
                <List
                key={mission._id}
                  id={mission._id}
                  goal={mission.goal}
                  title={mission.title}
                  image={mission.image}
                  category={mission.category}
                  tag={mission.tag}
                  reward={mission.reward}
                  account={mission.account}
                />
                </Link>
              ))}
          </div>
        </section>
      </>
    );
  }
}

export default Participate;
