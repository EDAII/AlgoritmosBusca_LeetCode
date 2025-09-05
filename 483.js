/**
 * @param {string} n
 * @return {string}
 */
var smallestGoodBase = function(n) {
    let num = BigInt(n);
    let maxM = Math.floor(Math.log(Number(n)) / Math.log(2)); 
    
    for (let m = maxM; m >= 1; m--) {
        let left = 2n;
        let right = num - 1n;
        
        while (left <= right) {
            let mid = (left + right) >> 1n;
            let sum = 1n;
            let curr = 1n;
            
            for (let i = 0; i < m; i++) {
                curr *= mid;
                sum += curr;
                if (sum > num) break;
            }
            
            if (sum === num) {
                return mid.toString();
            } else if (sum < num) {
                left = mid + 1n;
            } else {
                right = mid - 1n;
            }
        }
    }
    
    return (num - 1n).toString();
};
