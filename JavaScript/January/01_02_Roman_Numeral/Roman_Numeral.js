/**
 * @param {string} s
 * @return {number}
 */
const def = {
    I:1,V:5,X:10,L:50,C:100,D:500,M:1000
}
const small = ['V','X']
const medium = ['L','C']
const large = ['D','M']

var check = function(word,nextWord) {
    if(word === 'I' && small.includes(nextWord)) return true
    if(word === 'X' && medium.includes(nextWord)) return true
    if(word === 'C' && large.includes(nextWord)) return true
    else return false
}
var romanToInt = function(s) {
    const res = []
    s.split('').forEach((word,index,arr) => {
        if (word !== 'I' && word !== 'X' && word !== 'C') {
            res.push(def[word])
        } else {
            if (check(word,arr[index+1])) {
                res.push(-def[word])
            } else {
                res.push(def[word])
            }
        }
    })
    return res.map(i=>x+=i, x=0).reverse()[0]
};