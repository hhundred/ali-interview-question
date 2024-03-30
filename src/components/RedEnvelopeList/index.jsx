import React, { useEffect, useState } from "react";
import axios from "axios";
import RedEnvelopeContent from "../RedEnvelopeContent";
import './list.scss'

 const RedEnvelopeList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://systemjs.1688.com/krump/schema/1352.json")
      .then((res) => {
        setData(res.data.list);
      })
      .catch((err) => console.log("error", err));
  }, []);

  return (
    <div className="container">
      <p className="title">1688进货红包</p>
      {data?.length > 0 &&
        data.map((item) => {
          return <RedEnvelopeContent data={item}></RedEnvelopeContent>
        })}
    </div>
  );
}
export default RedEnvelopeList;