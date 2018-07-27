const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const [...rest] = grades;

const average = (...args) => args.reduce((x, y) => console.log(x+y/args.length)); 

average(...rest);
