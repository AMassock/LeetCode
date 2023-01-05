/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]);

    let darts = 1;
    let rightOverlap = points[0][1];

    for(let i = 1; i < points.length; i++) {
        if(points[i][0] > rightOverlap) {
            darts++
            rightOverlap = points[i][1]
            continue
        } else if(points[i][1] <= rightOverlap) {
            rightOverlap = Math.min(rightOverlap, points[i][1])
        }
    }
    console.log(darts);
    return darts
};



// Tests
// points = [[10,16],[2,8],[1,6],[7,12]];
// points = [[1,2],[3,4],[5,6],[7,8]];
// points = [[1,2],[2,3],[3,4],[4,5]];

// findMinArrowShots(points);