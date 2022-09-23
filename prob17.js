// Problem 1. Write a custom function that has the same behavior of inbuilt Array Join



function substring(str){
  let bag="";
  for(let i=0;i<str.length;i++){
    bag=bag+str[i]
  }
  return bag;
}

let arr=substring["ankush","praveen"]
console.log(arr);

