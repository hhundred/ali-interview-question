//格式化时间
function formatDate(timestamp) {
  const date = new Date(timestamp);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const formattedDate = month + "." + day + " " + hours + ":" + minutes;

  return formattedDate;
}
//倒计时
function countdown(timestamp) {
  // 将差值转换为时分秒
  let hours = Math.floor(timestamp / (1000 * 60 * 60));
  let minutes = Math.floor((timestamp % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timestamp % (1000 * 60)) / 1000);

  // 补零操作
  hours = hours < 10 ? "0" + (hours === 0 ? "0" : hours) : hours;
  minutes = minutes < 10 ? "0" + (minutes === 0 ? "0" : minutes) : minutes;
  seconds = seconds < 10 ? "0" + (seconds === 0 ? "0" : seconds) : seconds;
  let countdownData = {
    hours,
    minutes,
    seconds,
  };
  return countdownData;
}

let operationTime = {
  formatDate,
  countdown,
};
export default operationTime;
