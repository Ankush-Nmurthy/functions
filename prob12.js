// Problem 3: Use the same function to print Non-Primes from 2 to a given limit



function check_prime(num){
  let count=0;
for(let i=1;i<=num;i++){
  if(num%i==0){
    count++;
  }
}
  if(count!=2){ 
    return true;
  }else{
    return false;
  }
}


for(let i=1;i<=6;i++){
 let ans=check_prime(i);
  if(ans==true){
   console.log(i); 
  }
 
}


