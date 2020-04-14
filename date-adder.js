const add = (date, diff) => {
  inc = Number(diff.split(/(\D)/)[0])
  type = (diff.split(/(\D)/)[1])
  if (type === 's') {
    return new Date(date.setSeconds(date.getSeconds() + inc));
  } else if (type === 'm') {
    return new Date(date.setMinutes(date.getMinutes() + inc));
  } else if (type === 'h') {
    return new Date(date.setHours(date.getHours() + inc));
  } else if (type === 'd') {
    return new Date(date.setDate(date.getDate() + inc));
  } else if (type === 'w') {
    return new Date(date.setDate(date.getDate() + (inc * 7)));
  } else if (type === 'M') {
    return new Date (date.setMonth(date.getMonth() + inc));
  } else if (type === 'y') {
    return new Date(date.setYear(date.getFullYear() + inc));
  }
};

module.exports = { 
  add
};
