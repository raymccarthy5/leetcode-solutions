function isAnagram(s, t) {
  //return s.split('').sort().join('') === t.split('').sort().join('');

  if (s.length != t.length) {
    return false;
  }

  let sMap = {};
  let tMap = {};

  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
    tMap[t[i]] = (tMap[t[i]] || 0) + 1;
  }

  for (const [key, val] of Object.entries(sMap)) {
    if (!(key in tMap)) return false;
    if (tMap[key] !== val) return false;
  }

  return true;
}

// If s and t are not the same length, return false.

// Initialize two empty objects: sMap and tMap.

// Loop through each character in s and t simultaneously:

//     Increment the count of each character in sMap and tMap.

// Loop through each key-value pair in sMap:

//     If the key doesn't exist in tMap, return false.

//     If the value in tMap doesn't match the value in sMap, return false.

// If all checks pass, return true (they are anagrams).
