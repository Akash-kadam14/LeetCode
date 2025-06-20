/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let res = Number.MAX_SAFE_INTEGER;;
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
    return res === Number.MAX_SAFE_INTEGER ? 0 : res;
};