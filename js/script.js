const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const average = (...args) => console.log(args.reduce((x,y) => x + y) / args.length);

average(...grades);
