export const timeSetter = () => {
  const date = new Date().getDate();
  const day = new Date().getDay();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const minutesSet = normalize(minutes);
  let daySet = null;
  let monthSet = null;

  

  switch (day) {
    case 0:
      daySet = 'Sunday';
      break;
    case 1:
      daySet = 'Monday';
      break;
    case 2:
      daySet = 'Tuesday';
      break;
    case 3:
      daySet = 'Wednesday';
      break;
    case 4:
      daySet = 'Thursday';
      break;
    case 5:
      daySet = 'Friday';
      break;
    case 6:
      daySet = 'Saturday';
      break;
    default:
      daySet = '';
      break;
  }

  switch (month) {
    case 0:
      monthSet = 'January';
      break;
    case 1:
      monthSet = 'February';
      break;
    case 2:
      monthSet = 'March';
      break;
    case 3:
      monthSet = 'April';
      break;
    case 4:
      monthSet = 'May';
      break;
    case 5:
      monthSet = 'June';
      break;
    case 6:
      monthSet = 'July';
      break;
    case 7:
      monthSet = 'August';
      break;
    case 8:
      monthSet = 'September';
      break;
    case 9:
      monthSet = 'October';
      break;
    case 10:
      monthSet = 'November';
      break;
    case 11:
      monthSet = 'December';
      break;
    default:
      monthSet = '';
      break;
  }
  const fullDate = `${daySet}, ${date} ${monthSet} ${year} at ${hours}:${minutesSet}`;
  return fullDate;
}

const normalize = (time) => {
  if (time >= 0 && time < 10) {
    return 0 + time;
  } else {
    return time
  }
}