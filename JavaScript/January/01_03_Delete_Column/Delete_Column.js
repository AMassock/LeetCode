/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let ans = 0;
    out:

    for(let i = 0; i < strs[0].length;i++) {
        for(let j = 1; j < strs.length; j++) {
            if(strs[j].charCodeAt(i) < strs[j - 1].charCodeAt(i)) {
                ans++
                continue out
            }
        }
    }
    console.log(ans);
    return ans;
};

minDeletionSize(["zyx","wvu","tsr"]);