/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let winSum = 0;
    for(let i = 0 ; i < k; i++){
        winSum += nums[i]
    };
      let maxSum = winSum;
    for(let i = k; i< nums.length; i++){
        winSum = winSum - nums[i-k] + nums[i];
        maxSum = Math.max(maxSum, winSum);
    }
    return maxSum/k;
};