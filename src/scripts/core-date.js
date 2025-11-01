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
};

const timeFormatter = (time) => (time >= 0 && time < 10 ? '0' + time : time);

const dayPicker = (day) => {
  const weeekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  return weeekdays[day];
};

const monthPicker = (month) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return monthNames[month];
};

export const greetings = () => {
  const hours = new Date().getHours();
  let message = '';
  if (hours >= 0 && hours <= 12) {
    message = 'Hello, good morning!';
  } else if (hours >= 12 && hours <= 18) {
    message = 'Wellcome, good afternoon.';
  } else if (hours >= 18 && hours <= 23) {
    message = 'Good evening, have a good sleep!';
  }
  return message;
};
