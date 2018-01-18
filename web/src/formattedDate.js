export function convertToISOString(date) {
  let convertedDate = new Date(date).toISOString();
  return convertedDate;
}

export function currentDate(arg) {
  let currentDate = arg ? new Date(arg) : new Date();
  return currentDate.toISOString();
}

export function tomorrow() {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  return currentDate.toISOString();
}

export function oneWeek() {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 7);
  return currentDate.toISOString();
}

export function twoWeeks() {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 14);
  return currentDate.toISOString();
}

export function oneMonth() {
  let currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + 1);
  return currentDate.toISOString();
}

export function timeList() {
  let x = 15;
  let times = [];
  let tt = 0;
  let ap = ['AM', 'PM'];

  for (let i = 0; tt < 24 * 60; i++) {
    let hh = Math.floor(tt / 60);
    let mm = tt % 60;
    if (hh % 12 === 0) {
      times[i] = `12:${('0' + mm).slice(-2)} ${ap[Math.floor(hh / 12)]}`;
    } else {
      times[i] = `${('0' + hh % 12).slice(-2)}:${('0' + mm).slice(-2)} ${ap[Math.floor(hh / 12)]}`;
    }
    tt += x;
  }

  return times;
}

export function currentTime(arg) {
  let date = arg ? new Date(arg) : new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';

  minutes = minutes % 15 > 0 ? minutes - minutes % 15 + 15 : minutes;

  if (minutes === 60) {
    minutes = '00';
    hours += 1;
  }

  hours %= 12;
  hours = hours < 10 ? '0' + hours : hours;

  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

export function monthDayYearFormat(dateString) {
  let date = new Date(dateString);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  return month + '/' + day + '/' + year;
}

export function dayMonthYearFormat(dateString) {
  let date = new Date(dateString);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  return day + '/' + month + '/' + year;
}
