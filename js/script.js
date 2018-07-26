const average = (...args) => console.log(args.reduce((x,y) => x + y) / args.length);
average(7, 3);
