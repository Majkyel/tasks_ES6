const grades = [ 
{ name: 'Anna', grade: 1 }, 
{ name: 'Michal', grade: 4 }, 
{ name: 'Mateusz', grade: 2 }, 
{ name: 'Magda', grade: 5 },
{ name: 'Krystyna', grade: 3 },
{ name: 'Paulina', grade: 5 },
{ name: 'Emil', grade: 5 },
];

const average = (...args) => args.reduce((acc, obj) =>  acc + obj.grade, 0) / args.length;

console.log(average(...grades));
