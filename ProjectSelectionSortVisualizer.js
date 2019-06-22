//creating lines that separate each example
strokeWeight(2);
stroke(0, 0, 0);
line(0, 120, 400, 120);
line(0, 231, 400, 231);
line(0, 320, 400, 320);

var x = 25;
var y = 25;
// displaying the array
var displayArray = function(array, index, lowVal) {
    fill(255, 0, 0);
    textFont(createFont("monospace"), 12);
    for(var i = 0; i < array.length; i++){
        text(array[i], x, y);    
        strokeWeight(4);
        
        // purple value being compared
        if(array[i] === array[index]){
            stroke(133, 13, 214);
            line(x-2, y+6, x+11, y+6);       
        }
        
        // green lowest value
        if(array[i] === array[lowVal]){
            stroke(17, 255, 0);
            line(x-2, y+2, x+11, y+2);
        }
        
        x+=50;
    }
    
    y+=28;
    x=25;
};

// swapping 2 values 
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

// checks for lowest value in array/subarrays
var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

// loops through all positions in array, sends values to other functions
var selectionSort = function(array) {
    var min;
    for(var i = 0; i < array.length; i++){
        var minIndex = i;
        min = indexOfMinimum(array, i);
        displayArray(array, min, minIndex);
        swap(array, i, min);
    }
};

var array = [2, 1, 5, 7];
selectionSort(array);
Program.assertEqual(array, [1, 2, 5, 7]);

var array2 = [10, 7, 3, 0];
selectionSort(array2);
Program.assertEqual(array2, [0, 3, 7, 10]);

var array3 = [7, 2, 4];
selectionSort(array3);
Program.assertEqual(array3, [2, 4, 7]);

var array4 = [8, 6, 1];
selectionSort(array4);
Program.assertEqual(array4, [1, 6, 8]);
