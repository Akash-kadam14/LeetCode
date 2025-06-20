/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let res = Infinity
    let winSum = 0
    for (let right = 0; right < nums.length; right++) {
        winSum += nums[right];
        console.log(winSum)
        while (winSum >= target) {
            res = Math.min(res, right - left + 1);
            winSum -= nums[left];
            left++
        }

    }
    return res === Infinity ? 0 : res;
};