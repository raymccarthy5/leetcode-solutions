function hasDuplicate(nums) {
  const mySet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (mySet.has(nums[i])) {
      return true;
    }
    mySet.add(nums[i]);
  }
  return false;
}

// Initialize an empty Set called mySet.

// Loop through each element in the nums array.

// For each element:

//     Check if mySet already contains the element.

//         If yes, return true (duplicate found).

//         If no, add the element to mySet.

// If the loop finishes without finding duplicates, return false.
