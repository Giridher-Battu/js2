let dt = ["int" , "string", "float", "short"];
pop =dt.pop();//Removes last element from an array
console.log(pop);
console.log(dt);

push = dt.push("object");// add specified elemen to end of the array
console.log(dt);

shift = dt.shift();//removes an element first element of an array
console.log(dt);

unshift = dt.unshift("Int");//add and element to an array at the begining
console.log(dt);
 
splice = dt.splice(1,0,"boolean");//add element @ specified position
console.log(dt);

slice=dt.slice(1,4);//used for a subset of an array
console.log(slice);
