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

// Contains Duplicate
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// STEPS:

// Initialize an empty Set called mySet.

// Loop through each element in the nums array.

// For each element:

//     Check if mySet already contains the element.

//         If yes, return true (duplicate found).

//         If no, add the element to mySet.

// If the loop finishes without finding duplicates, return false.
