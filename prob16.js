// Problem 5: Write a function to replace spaces in a given string with - .

function replace(M){
  let bag="";
  for(let i=0;i<M.length;i++){
    if(M[i]==" "){
      bag=bag+"-";
    }else{
      bag=bag+M[i];
    }
  }return bag;
}



let ans=replace("ear near year fear");
console.log(ans);
