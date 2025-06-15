/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {

    if (s.length < 2) return ""; // base case
    
    // create a set of letters present in the current string
    let set = new Set(s);
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (
            (char.toUpperCase() !== char &&
              !set.has(char.toUpperCase())) ||
            (char.toLowerCase() !== char &&
              !set.has(char.toLowerCase()))
        ) {
            // we found a character that doesn't have its counterpart
            // we split here and solve both halves
            let left = longestNiceSubstring(s.slice(0, i)); 
            let right = longestNiceSubstring(s.slice(i + 1));

            return left.length >= right.length ? left : right;
        }
    }
    return s;


};