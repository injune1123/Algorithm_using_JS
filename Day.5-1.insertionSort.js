//https://www.hackerrank.com/challenges/insertionsort1


// From HackerRank

// Problem Statement

// Sorting 
// One common task for computers is to sort data. For example, people might want to see all their files on a computer sorted by size. Since sorting is a simple problem with many different possible solutions, it is often used to introduce the study of algorithms.

// Insertion Sort 
// These challenges will cover Insertion Sort, a simple and intuitive sorting algorithm. We will first start with an already sorted list.

// Insert element into sorted list 
// Given a sorted list with an unsorted number e in the rightmost cell, can you write some simple code to insert e into the array so that it remains sorted?

// Print the array every time a value is shifted in the array until the array is fully sorted. The goal of this challenge is to follow the correct order of insertion sort.

// Guideline: You can copy the value of e to a variable and consider its cell "empty". Since this leaves an extra cell empty on the right, you can shift everything over until V can be inserted. This will create a duplicate of each value, but when you reach the right spot, you can replace it with e.

// Input Format 
// There will be two lines of input:

// Size - the size of the array
// Arr - the unsorted array of integers
// Output Format 
// On each line, output the entire array every time an item is shifted in it.

// Constraints 
// 1≤Size≤1000 
// −10000≤e≤10000,e∈Arr

// Sample Input

// 5
// 2 4 6 8 3
// Sample Output

// 2 4 6 8 8 
// 2 4 6 6 8 
// 2 4 4 6 8 
// 2 3 4 6 8 
// Explanation

// 3 is removed from the end of the array.
// In the 1st line 8>3, so 8 is shifted one cell to the right. 
// In the 2nd line 6>3, so 6 is shifted one cell to the right. 
// In the 3rd line 4>3, so 4 is shifted one cell to the right. 
// In the 4th line 2<3, so 3 is placed at position 2.

// Task

// Complete the method insertionSort which takes in one parameter:

// Arr - an array with the value e in the right-most cell.




// function processData1(input) {
    //Enter your code here
    var input = input.split("\n")[1].split(" ");
    var toSort = input[input.length-1];
    for (var i=input.length-2; i>=0; i--){
        if (input[i]>toSort){
            input[i+1]=input[i];
        }
        else{
            break;
        }
        console.log(input.join(" "));
    }
    input[i+1]=toSort
    console.log(input.join(" "));
}

// processData1("10\n2 3 4 5 6 7 8 9 12 11")





// Problem Statement

// In Insertion Sort Part 1, you sorted one element into an array. Using the same approach repeatedly, can you sort an entire unsorted array?

// Guideline: You already can place an element into a sorted array. How can you use that code to build up a sorted array, one element at a time? Note that in the first step, when you consider an element with just the first element - that is already "sorted" since there's nothing to its left that is smaller.

// In this challenge, don't print every time you move an element. Instead, print the array after each iteration of the insertion-sort, i.e., whenever the next element is placed at its correct position.

// Since the array composed of just the first element is already "sorted", begin printing from the second element and on.

// Input Format 
// There will be two lines of input:

// s - the size of the array
// ar - a list of numbers that makes up the array
// Output Format 
// On each line, output the entire array at every iteration.

// Constraints 
// 1≤s≤1000 
// −10000≤x≤10000,x∈ar

// Sample Input

// 6
// 1 4 3 5 6 2
// Sample Output

// 1 4 3 5 6 2 
// 1 3 4 5 6 2 
// 1 3 4 5 6 2 
// 1 3 4 5 6 2 
// 1 2 3 4 5 6 
// Explanation 
// Insertion Sort checks 4 first and doesn't need to move it, so it just prints out the array. Next, 3 is inserted next to 1, and the array is printed out. This continues one element at a time until the entire array is sorted.

// Task 
// The method insertionSort takes in one parameter: ar, an unsorted array. Use an Insertion Sort Algorithm to sort the entire array.


function processData(input) {
    //Enter your code here
    var unsortedArr = input.split("\n")[1].split(" ");
    for (var i = 1; i< unsortedArr.length; i++){
        var curEle = unsortedArr[i];
        for (var j = i-1; j>=0 ;j-- ){
            if (+unsortedArr[j]>+curEle){
                unsortedArr[j+1] = unsortedArr[j]
            }
            else{
                break;
            }
        }
        unsortedArr[j+1]=curEle;
        console.log(unsortedArr.join(" "));
    }
} 
