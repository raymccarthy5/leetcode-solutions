function twoSum(nums, target) {
  // for (let i=0; i<nums.length; i++){
  //     for (let j=i+1; j<nums.length; j++){
  //         if ((nums[j] + nums[i]) === target){
  //             return [i, j];
  //         }
  //     }
  // }

  let hashset = new Set();

  for (let i = 0; i < nums.length; i++) {
    let confirmed = target - nums[i];
    if (hashset.has(confirmed)) {
      return [nums.indexOf(confirmed), i];
    }
    hashset.add(nums[i]);
  }
}

// Initialize an empty Set called hashset.

// Loop through each index i in nums:

//     Calculate confirmed = target - nums[i].

//     If hashset contains confirmed, return [nums.indexOf(confirmed), i].

//     Add nums[i] to hashset.

// If no pair found, function ends without return (fix: add explicit return if needed).
