// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block


function swap(char) {
  let str1="qwertyuiopasdfghjklzxcvbnm";
  let str2="QWERTYUIOPASDFGHJKLZXCVBNM";
  for(let i=0;i<str1.length;i++){
    if(char==str1[i]){
      return str2[i];
    }
  }
  for(let j=0;j<str2.length;j++){
    if(char==str2[j]){
      return str1[j]
    }
  }   
}

function swap2(M) {
  let bag="";
  for(let i=0;i<M.length;i++){
    let swaped_ans=swap(M[i]);
    bag=bag+swaped_ans;
  }
  return bag;
}

let final_ans=swap2("Vishal");
console.log(final_ans);