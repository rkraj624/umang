import React from "react";
import data from "../../data";
function Home() {
  return (
    <div className="home">
      <img
        src={data.banner}
        alt="umang"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default Home;
