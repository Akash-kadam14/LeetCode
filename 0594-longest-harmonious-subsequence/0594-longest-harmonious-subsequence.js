/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map = new Map();
    let maxlen = 0
    // count frequencies
    for(let eachNum of nums) {
        map.set(eachNum, (map.get(eachNum) || 0) + 1 )
    };

    // check for  neighbours
    for(let [key, val] of map.entries()) {
        if(map.has(key+1)) {
            maxlen = Math.max(maxlen, val + map.get(key+1))
        }
    }
    return maxlen
};