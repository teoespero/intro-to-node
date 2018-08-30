// Teo Espero
// BS Cloud and Systems Administration
// Western Governors University

// #Web-Dev-Bootcamp-Udemy

// main code
var scoresFromA = [90, 98, 89, 100, 100, 86, 94];
var scoresFromB = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

// the idea of this review is to get the averages
// of the scores supplied by the user

console.log("Average From A: " + getAverage(scoresFromA));
console.log("Average From B: " + getAverage(scoresFromB));

// function list
function getAverage(myList){
     var accumulator = 0;
     var average = 0;
     var numOfItems = myList.length;
     
     for (var looper = 0; looper < numOfItems; looper++){
          accumulator = accumulator + myList[looper];
     }
     
     average = accumulator / numOfItems;
     
     return Math.round(average);
}
     
