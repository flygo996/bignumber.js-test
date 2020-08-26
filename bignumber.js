const BigNumber = require('bignumber.js');
const x = new BigNumber(0.3);
console.log(x); // BigNumber { s: 1, e: -1, c: [ 30000000000000 ] }
console.log(x.minus(0.1)); // BigNumber { s: 1, e: -1, c: [ 20000000000000 ] }
console.log(x.minus(0.1).toFixed(5)); // 0.20000

//
const y = new BigNumber(255.5);
console.log(y.toExponential(5)); // "2.55500e+2"
console.log(y.toFixed(5)); // "255.50000"
console.log(y.toPrecision(5)); // "255.50"
console.log(y.toNumber()); //  255.5

//
const z = new BigNumber(255.545);
console.log(z.toExponential(5)); // "2.55545e+2"
console.log(z.toFixed(5)); // "255.54500"
console.log(z.toPrecision(5)); // "255.55"
console.log(z.toNumber()); //  255.545

const h = new BigNumber(17.9);
console.log(h * 10 ** 8); // 1789999999.9999998  // ! 错误
console.log(h.times(10 ** 8)); // BigNumber { s: 1, e: 9, c: [ 1790000000 ] }
console.log(h.times(10 ** 8).toFixed(8)); // 1790000000.00000000  // ! 正确

const g = new BigNumber(17.95555);
const decimal = 3;
console.log(g.toFixed(decimal)); // "17.956"  // ! 四舍五入
console.log(Number.parseInt(g.times(10 ** decimal)) / 10 ** decimal); // "17.955"  // ! 末尾截断
// ! 要的就是 上面这个效果！！(末尾截断)
