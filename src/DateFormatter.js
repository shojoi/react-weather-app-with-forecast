function DateFormatter(props) {
  //console.log("Timestamp recived is  ---------------- " + props.date);

  let date = new Date(props.date * 1000); // *1000 => converting Unix timestamp to milliseconds
  let days = [
    "Sunday ",
    "Monday ",
    "Tuesday ",
    "Wednesday ",
    "Thursday ",
    "Friday ",
    "Saturday ",
  ];
  let day = days[date.getDay()];

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  //console.log(`Day = ${days[day]} Hours = ${hours} & Minutes =${minutes}`);

  return (
    <div>
      {day}
      {hours}:{minutes}
    </div>
  );
}

export default DateFormatter;
