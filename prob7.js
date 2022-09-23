// Write a function isOdd which returns a boolean value based on the number is odd or not
//Use this function to print the odd numbers from 0 to a given limit(included)

function odd(x){
x%2==1 ? console.log( "true") : console.log("false");
  return x;
  }

let ans=odd(13);
for(let i=1;i<=ans;i++){
  if(i%2!=0){
    console.log(i);
  }
}