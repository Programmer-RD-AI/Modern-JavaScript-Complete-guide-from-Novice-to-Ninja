// https://date-fns.org/

const now = new Date();
// console.log(now, dateFns.isToday(now));

// formatting options
console.log(dateFns.format(now, "YYYY"));
console.log(dateFns.format(now, "MMM"));
console.log(dateFns.format(now, "dddd"));
console.log(dateFns.format(now, "Do"));
console.log(dateFns.format(now, "dddd, Do, MMM, YYYY"));
