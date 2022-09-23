


// Write a function to convert a character to lower case

function convert(char){
  let str1="qwertyuiopasdfghjklzxcvbnm";
  let str2="QWERTYUIOPASDFGHJKLZXCVBNM";
for(let i=0;i<=str2.length;i++){
  if(char==str2[i]){
    return str1[i];
  }
}return char;
}

// Use this function to convert a given word to lower case

function convert_word(x){
  let bag="";
  for(let i=0;i<x.length;i++){
    let word=convert(x[i])
    bag=bag+word;
  }return bag;
}


// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

function convert_arr(M){
  bag=[];
  for(let i=0;i<M.length;i++){
    let ans=convert_word(M[i]);
    bag.push(ans);
  }
  return(bag);
}
let word=convert_arr(["MA", "SA", "I", "SCH", "OOL"]);
console.log(word);
