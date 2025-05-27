/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
const romanValue = {
I :  1,
V :  5,
X :  10,
L :  50,
C :  100,
D :  500,
M : 1000
}
let result = 0;
let prev = 0;
for(i = s.length - 1 ; i >= 0; i--) {
  const current = romanValue[s[i]]
  if( current < prev) {
    result -= current;
  } else  {
    result += current;
  }
  prev = current
}
console.log(result)
return result
};