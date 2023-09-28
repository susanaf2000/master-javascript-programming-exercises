function search(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === value) {
          return mid; // Found the value, return its index
      } else if (arr[mid] < value) {
          left = mid + 1; // Search in the right half
      } else {
          right = mid - 1; // Search in the left half
      }
  }

  return null; // value not found
}


