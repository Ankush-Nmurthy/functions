  // function addition(){
  //   let a=10;
  //   let b=5
  //   console.log(a+b);
  // }
  
  // function subtraction(){
  //   let a=10;
  //   let b=5
  //   console.log(a-b);
  // }
  
  // function multiplication(){
  //   let a=10;
  //   let b=5
  //   console.log(a*b);
  // }
  
  // function division(){
  //   let a=10;
  //   let b=5
  //   console.log(a/b);
  // }
    
  //   for(let i=0;i<=6;i++){
  //      division();
  //     multiplication();
  //   }



function div(num){
if(num%3==0){
  return true;
}else {
  return false
}
}



let arr=[2,3,4,5,6,7,8,9,12,15,21];
for(let i=0;i<arr.length;i++){
    let ans=div(arr[i]);
  if(ans==true){
  console.log(arr[i]);  
  }
  
}