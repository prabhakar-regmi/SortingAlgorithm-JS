const Sort = require('./JS/Sort.js');


function Compare (array1, array2)
{
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i++){
        if (array1[i] !== array2[i]) return false;
    }
    return true;
}

function DisplayPositiveMessage(sorting_algorithm, comparator = "default")
{
    console.log('\u2705 '+ sorting_algorithm + ' worked as expected with ' + comparator + ' comparator');
}


function DisplayNegativeMessage(sorting_algorithm, comparator = "default")
{
    console.log('\u274c ' + sorting_algorithm + ' DIDN\'T work as expected with ' + comparator + ' comparator');
}


let array = [ 12, 0, -12, 5, 9, 2, 6, 8, 9, 100, -1000000, -1200, 4, -2, 18, 4];
let sorted_array = [...array]; 
sorted_array.sort((a, b)=>a-b);
let sorted_array_desc = [...array];
sorted_array_desc.sort((a,b)=>b-a);

let tmp_array = [...array];
Sort.BubbleSort(tmp_array);
if (Compare(tmp_array,sorted_array)) DisplayPositiveMessage("Bubble Sort");
else DisplayNegativeMessage("Bubble Sort");

tmp_array = [...array];
Sort.BubbleSort(tmp_array, (a,b)=>{return a > b;});
if (Compare(tmp_array,sorted_array_desc)) DisplayPositiveMessage("Bubble Sort", "custom");
else DisplayNegativeMessage("Bubble Sort", "custom");

tmp_array = [...array];
Sort.SelectionSort(tmp_array);
if (Compare(tmp_array, sorted_array)) DisplayPositiveMessage("Selection Sort");
else DisplayNegativeMessage("Selection Sort");

tmp_array = [...array];
Sort.SelectionSort(tmp_array, (a,b)=>{return a > b;});
if (Compare(tmp_array,sorted_array_desc)) DisplayPositiveMessage("Selection Sort", "custom");
else DisplayNegativeMessage("Selection Sort", "custom");


tmp_array = [...array];
Sort.InsertionSort(tmp_array);
if (Compare(tmp_array, sorted_array)) DisplayPositiveMessage("Insertion Sort");
else DisplayNegativeMessage("Insertion Sort");
tmp_array = [...array];
Sort.InsertionSort(tmp_array, (a,b)=>{return a > b;});
if (Compare(tmp_array,sorted_array_desc)) DisplayPositiveMessage("Insertion Sort", "custom");
else DisplayNegativeMessage("Insertion Sort", "custom");


tmp_array = [...array];
Sort.MergeSort(tmp_array);
if (Compare(tmp_array, sorted_array)) DisplayPositiveMessage("Merge Sort");
else DisplayNegativeMessage("Merge Sort");

tmp_array = [...array];
Sort.MergeSort(tmp_array, (a,b)=>{return a > b;});
if (Compare(tmp_array, sorted_array_desc)) DisplayPositiveMessage("Merge Sort", "custom");
else DisplayNegativeMessage("Merge Sort","custom");


tmp_array = [...array];
Sort.QuickSort(tmp_array);
if (Compare(tmp_array, sorted_array)) DisplayPositiveMessage("Quick Sort");
else DisplayNegativeMessage("Quick Sort");


tmp_array = [...array];
Sort.QuickSort(tmp_array,(a,b)=>{return a > b;});
if (Compare(tmp_array, sorted_array_desc)) DisplayPositiveMessage("Quick Sort", "custom");
else DisplayNegativeMessage("Quick Sort", "custom");

