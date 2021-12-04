let rating = [3 , 2, 1, 5 ,4 ,2];
rating.sort();
console.log(rating);//sorting in ascending order
console.log(rating[0]);//min value in array

rating.sort(function (a,b){ return b-a});//descending order
console.log(rating);
console.log(rating[0]);//max valu in an array