/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0;
    for(let i = 0 ; i < nums.length; i++) {
        if(i < nums.length && nums[i] === val) {
            continue;
        }
        else {
            nums[count] = nums[i];
            count++;
        }
    }
 return count;
};