// Problem 4: Write a function to check if the char is a small case or not.


function check_char(M){
  let str1="qwertyuiopasdfghjklzxcvbnm";
  for(let i=0;i<str1.length;i++){
    if(M ==str1[i]){
      return "small case";
    }
}return "Not a small case"
}

let ans=check_char("P");
console.log(ans);
