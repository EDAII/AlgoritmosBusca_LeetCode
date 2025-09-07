function reversePairs(nums) {
  const n = nums.length;
  if (n < 2) return 0;

  const tmp = new Array(n);

  function sort(l, r) {
    if (l >= r) return 0;

    const m = (l + r) >> 1;
    let count = sort(l, m) + sort(m + 1, r);

    let j = m + 1;
    for (let i = l; i <= m; i++) {
      while (j <= r && nums[i] > 2 * nums[j]) j++;
      count += j - (m + 1);
    }

    let i = l;
    j = m + 1;
    let k = l;

    while (i <= m && j <= r) {
      if (nums[i] <= nums[j]) tmp[k++] = nums[i++];
      else tmp[k++] = nums[j++];
    }
    while (i <= m) tmp[k++] = nums[i++];
    while (j <= r) tmp[k++] = nums[j++];

    for (let t = l; t <= r; t++) nums[t] = tmp[t];

    return count;
  }

  return sort(0, n - 1);
}

console.log(reversePairs([1, 3, 2, 3, 1])); 
console.log(reversePairs([2, 4, 3, 5, 1]));
