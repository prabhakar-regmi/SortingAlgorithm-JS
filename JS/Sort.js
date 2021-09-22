module.exports = 
class Sort {
    static BubbleSort(array, comparator=this.#custom_comparator) {
        // bubble up the largest element at the end of the array
        // Algorithm is O(n^2) time, O(1) space
        const s = array.length;
        for (let i = 0; i < s; i++) { // O(n)
            for (let j = 0; j < s-i-1; j++){ // O(n)
                if (comparator(array[j+1], array[j])) [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }

    static SelectionSort(array, comparator=this.#custom_comparator) {
        // Find the smallest element in the unsorted array, and swap it with the first element in it
        // Then, consider the first element of the array sorted
        // Algorithm is O(n^2) time, O(1) space
        const s = array.length;
        for (let i = 0; i < s-1; i++) { // O(n)
            let smallest_idx = i;
            for (let j = i+1; j < s; j++){ // O(n)
                if (comparator(array[j], array[smallest_idx])) smallest_idx = j;
            }
            [array[smallest_idx], array[i]] = [array[i], array[smallest_idx]];
        }
    }

    static InsertionSort(array, comparator = this.#custom_comparator) {
        // iterate through the elements in the array,
        // shift the current element to the previous position 
        // until the array is sorted until that point
        // Algorithm is O(n^2) time, O(1) space
        let s = array.length;
        for (let i = 1; i < s; i++) { // O(n)
            for (let j = i-1; j >= 0; j--) { // O(n) worse case
                if (comparator(array[j+1],array[j])) { 
                    [array[j], array[j+1]] = [array[j+1], array[j]];
                }
                else break;
            }
        }
    }
    
    static MergeSort(array, comparator = this.#custom_comparator) {
        // Algorithm is O(n log n) time and O(n) space
        this.#MergeSort(array, 0, array.length-1, comparator);
    }

    static QuickSort(array, comparator = this.#custom_comparator) {
        // Algorithm is O(n^2) time in the worse case, O(n) time in best casse 
        // but we can achieve O(n log n) time in average
        // Space: O(1)
        this.#QuickSort(array, 0, array.length-1, comparator);
    }

    // private functions

    static #custom_comparator = function(lhs, rhs){return lhs < rhs;}
    
    static #MergeSort(array, start, end, comparator) { // O(n log n) time
        // Divide the array into sorted subarrays
        // Merge two subarrays together
        if (start === end) return;
        let mid = Math.floor((start + end) / 2);

        // (Dividing the array into two parts and processing these two chunks recursively is O(log n) time)
        this.#MergeSort(array, start, mid, comparator);
        this.#MergeSort(array, mid+1, end, comparator);
        this.#Merge(array, start, mid, end, comparator); // (this step is O(n) )
    }

    static #Merge(array, start, mid, end, comparator) {
        let merged = []; // merged array (O(n) space)

        let i = start;
        let j = mid+1;
        while (i <= mid && j <= end) {
            if (comparator(array[i], array[j])) merged.push(array[i++]);
            else merged.push(array[j++]);
        }
        while (i <= mid) merged.push(array[i++]);
        while (j <= end) merged.push(array[j++]);

        // modify the array
        for (let i = start, cnt = 0; i <= end; i++, cnt++){
            array[i] = merged[cnt];
        }
    }

    static #QuickSort(array, start, end, comparator)
    {
        // Find a pivot which is placed at a correct sorted position
        // Then recursively QuickSort the portion left off the pivot 
        // and the right of the pivot
        // In the worse case, this algorithm is O(n^2)
        // In the best case, 
        if (start >= end) return;
        let pivot = this.#Partition(array, start, end, comparator);
        this.#QuickSort(array, start, pivot-1, comparator);
        this.#QuickSort(array, pivot+1, end, comparator);
    }

    static #Partition(array, start, end, comparator)
    {
        // choose the pivot as the last element.
        // Then, swap elements in the array and find a position that that this pivot belongs
        // Such that the pivot divides the array into two part - left part = part less than the array
        // Right part = part greater than the array

        let pivot = end;
        let partition = start; // first index where index is greater than element at pivot
        for (let i = start; i < end; i++)
        {
            if(comparator(array[i], array[pivot])){
                if (partition !== i) [array[partition], array[i]] = [array[i], array[partition]];
                partition++;
            }
        }
        [array[partition], array[pivot]] = [array[pivot], array[partition]];
        return partition;
    }

};