export const timeSetter = () => {
  const date = new Date().getDate();
  const day = new Date().getDay();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const minutesSet = timeFormatter(minutes);
  const daySet = dayPicker(day);
  const monthSet = monthPicker(month);

  const fullDate = `${daySet}, ${date} ${monthSet} ${year} at ${hours}:${minutesSet}`;
  return fullDate;
}

const timeFormatter = (time) => {
  if (time >= 0 && time < 10) {
    return '0' + time;
  } else {
    return time
  }
}

const dayPicker = (day) => {
  const weeekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return weeekdays[day];
}

const monthPicker = (month) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return monthNames[month];
}