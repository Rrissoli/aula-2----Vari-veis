let o = 2,
    k = 0
let ukt = o / k
console.log(ukt); // infinity

o = 0
ukt = o / k
console.log(ukt); //NaN

o = 2
ukt = k / o
console.log(ukt); //0