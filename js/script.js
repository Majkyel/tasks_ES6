const average = (...args) => args.reduce((x, y) => x + y, 10) / args.length;

console.log(average(3, 3));
