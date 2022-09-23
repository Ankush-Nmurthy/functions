// Problem 3: Use the same function to print Non-Primes from 2 to a given limit



function check_prime(num){
  let count=0;
for(let i=1;i<=num;i++){
  if(num%i==0){
    count++;
  }
}
  if(count==2){
    return "is prime";
  }else{
    return "not a prime";
  }
}

function check(N){
  for(let i=2;i<=N;i++){
    let ans=check_prime(i);
    if(ans=="is prime"){
      console.log(ans);
    }else{
      return i;
    }
    
  }
}

let number=check(25);
console.log(number);