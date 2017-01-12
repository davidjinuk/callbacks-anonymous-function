var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(point){
  var z;

    z = Math.pow(point.x, 2) + Math.pow(point.y, 2);
    z = Math.sqrt(z);

  return z;
});

console.log(result);


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);