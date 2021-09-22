# SortingAlgorithm-JS
As a part of learning Javascript, I wanted to implement the some popular sorting algorithms in it. 

## Implementation

The Sort algorithms are implemented in a JS class called ``Sort`` as static functions. One can easily ``require`` the ``Sort.js`` file to access this class:
```javascript
const Sort = require('./Sort.js');
```
Then, one could use each of these sort algorithms using the following:
```javascript
Sort.BubbleSort(array1);
Sort.SelectionSort(array2);
Sort.InsertionSort(array3);
Sort.MergeSort(array4);
Sort.QuickSort(array5);
```

A custom comparator can also be passed to the sorting function as such:
```javascript
Sort.BubbleSort(array1, (lhs, rhs)=>{return lhs > rhs;});
```

### Currently Implemented Sort Algorithms:

- Bubble Sort ( O(n<sup>2</sup> time and O(1) space )
- Selection Sort ( O(n\u00B2) time and O(1) space )
- Insertion Sort ( O(n\u00B2) time and O(1) space )
- Merge Sort (O(n log n) time and O(n) space )
- Quick Sort (Time Complexity: Worst case: O(n\u00B2), Best Case: O(n), On  Average: O(n log n). Space Complexity: O(1))

## To Run
There's some driver code in ``driver.js``. If you have ``node.js`` installed, you can easily run using:
```javascript
node .\driver.js
```

## Developer's Info
This is developed by Prabhakar Regmi
