/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    if (nums && nums.length > 0) {
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (map.has(complement)) {
                return [map.get(complement), i]
            };
            map.set(nums[i], i);
        }
    }

    return [];
};
console.log(twoSum())