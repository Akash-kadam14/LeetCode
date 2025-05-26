/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let result = 0
let rem = 0;
let q = x;
   while(q>0) {
  rem = q % 10;
  q = Math.floor(q/10);
  result = (result * 10) + rem;
}
if(result === x) {
  return true
} else {
  return false
} 
};