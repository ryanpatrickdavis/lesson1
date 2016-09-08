/**
 * Created by Ryan on 2016-09-08.
 */

//link to the node filesystem library to read the text files
var fs = require('fs');

//load food asynchronously                //callback function with an error in the first position or the data in the second position
var food = fs.readFile('food.txt','utf8', function(err, food){
    if (err) {
        console.log(err);
    }

else {
    console.log(food);
}
});

//print food heading
console.log('FOOD\n');

//load drinks asynchronously                //callback function
var drinks = fs.readFile('food.txt','utf8', function(err, drinks){
    if (err) {
        console.log(err);
    }

    else {

//print drinks heading
        console.log('\nDRINKS\n');
        console.log(drinks);
    }
});
