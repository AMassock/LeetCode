/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {

    costs.sort((a, b) => a - b);
    let count = 0, sum = 0;

    for(const cost of costs) {

        if(sum + cost > coins) {
            break;
        }
        sum += cost;
        count++;
    }

    console.log(count);
    return count;

};