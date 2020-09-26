const age = [30, 29, 54];

// [30, 29. 54] => [30, 19, 54, _]
// [0, 1, 2] => [0, 1, 2, 3]
age.push(60); // => Constant Time Complexity: O(1)

// [ 30, 29, 54] => [_, 30, 29, 54]
// [0, 1, 2] => [0, 1, 2, 3]
age.unshift(10); // => Linear Time Complexity: 0(n)