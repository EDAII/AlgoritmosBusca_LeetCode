function reversePairsBinarySearch(nums) {
  const seen = [];
  let count = 0;

  function upperBound(arr, target) {
    let l = 0, r = arr.length;
    while (l < r) {
      const m = (l + r) >> 1;
      if (arr[m] <= target) l = m + 1;
      else r = m;
    }
    return l;
  }

  function insertSorted(arr, val) {
    let l = 0, r = arr.length;
    while (l < r) {
      const m = (l + r) >> 1;
      if (arr[m] < val) l = m + 1;
      else r = m;
    }
    arr.splice(l, 0, val);
  }

  for (const x of nums) {
    const pos = upperBound(seen, 2 * x);
    count += seen.length - pos;
    insertSorted(seen, x);
  }

  return count;
}

console.log(reversePairsBinarySearch([1, 3, 2, 3, 1])); 
console.log(reversePairsBinarySearch([2, 4, 3, 5, 1]));
