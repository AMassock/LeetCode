/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let [gasInTank, min, minIndex] = [0, Infinity, -1]

    for (let i = 0; i < gas.length; i++) {

        gasInTank += gas[i] - cost[i]

        if (gasInTank <= min) {

            min = gasInTank
            minIndex = i === gas.length - 1 ? 0 : i + 1

        }
    }

    return gasInTank < 0 ? - 1 : minIndex

};