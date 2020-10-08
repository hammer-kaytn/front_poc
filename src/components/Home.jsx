import React from "react";

const Home = ({ address }) => {
  return (
    <div className="padding-top-4e">
      <h1>첫 화면</h1>
      {address}
    </div>
  );
};

export default Home;
