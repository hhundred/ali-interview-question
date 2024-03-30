import React, { useState, useEffect, useRef } from "react";
import "./style.scss";
import operationTime from "../../utils";

const RedEnvelopeContent = (props) => {
  const { data } = props;
  const [remainingTime, setRemainingTime] = useState(data.restTime);
  const timerRef = useRef(null);

  const startTime = () => {
    timerRef.current = setTimeout(() => {
      if (remainingTime <= 1000) {
        clearTimeout(timerRef.current);
        return;
      }
      setRemainingTime(remainingTime - 1000);
    }, 1000);
  }

  const stopTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startTime()
  }, [remainingTime]);

  useEffect(() => {
    return () => stopTimer();
  }, []);


  return (
    <div className="backgroundImg">
      <p className="money">
        {data.money}
        <span className="unit">元</span>
      </p>
      <div className="descriptionBox">
        <p className="desTitle">{data.title}</p>
        <p className="description">{data.description}</p>
        {remainingTime >= 1000 ? (
          <p className="time">
            距结束 <span className="restTime">{operationTime.countdown(remainingTime).hours}</span> :{" "}
            <span className="restTime">{operationTime.countdown(remainingTime).minutes}</span> :{" "}
            <span className="restTime">{operationTime.countdown(remainingTime).seconds}</span>
          </p>
        ) : (
          <p className="time">
            {"有效期：" +
              operationTime.formatDate(data.time[0]) +
              "-" +
              operationTime.formatDate(data.time[1])}
          </p>
        )}
      </div>
      <p className="status">{remainingTime <= 1000 ? '已过期' : data.status}</p>
    </div>
  );
};
export default RedEnvelopeContent;
