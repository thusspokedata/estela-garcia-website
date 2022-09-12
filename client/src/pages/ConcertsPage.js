import React, { useState, useEffect } from "react";
import axios from "axios";
import { ShowConcerts } from "../components";

function Concerts() {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/concerts")
      .then((response) => {
        setConcerts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <main>
        <ShowConcerts concerts={concerts} />
      </main>
    </>
  );
}

export default Concerts;
