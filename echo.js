// Teo Espero
// BS Cloud and Systems Administration
// Western Governors University

// #Web-Dev-Bootcamp-Udemy

// Testing out the node.js console
// with a simple javascript function

echo("Echo!!!", 10);
echo("Tater Tots!!!", 3);

function echo(myText, myCtr){
     for(var looper = 1; looper <= myCtr; looper++){
          console.log("Line # " + looper + " " + myText);
     }
}