// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

function result(str){
    let arr=str.split('');
    let newArr=arr.reverse();
    let result=newArr.join('');
    console.log(result);
  }
  
  result("Hello");