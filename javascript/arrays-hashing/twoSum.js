function twoSum(nums, target) {
  // for (let i=0; i<nums.length; i++){
  //     for (let j=i+1; j<nums.length; j++){
  //         if ((nums[j] + nums[i]) === target){
  //             return [i, j];
  //         }
  //     }
  // }

  let hashmap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (hashmap.has(diff)) {
      return [hashmap.get(diff), i];
    }
    hashmap.set(nums[i], i);
  }
}

// Initialize an empty Map called hashmap.

// Loop through each index i in nums:

//     Calculate diff = target - nums[i].

//     If hashmap has diff, return [hashmap.get(diff), i].

//     Set nums[i] as key and i as value in hashmap.

// If no pair found, function ends without return (add explicit return if needed).
