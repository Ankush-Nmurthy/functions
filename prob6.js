// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14



function diff(x,y){
  return x-y;
}
let ans=diff(2,20);
if(ans<0){
 ans = -(ans);
  console.log(ans);
}else{
  console.log(ans);
}