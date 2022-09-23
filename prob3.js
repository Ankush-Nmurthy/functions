// // using return in function;
// function print(x,y){
//   return (x+y);
// }

// var value=print(10,5);
  // console.log(value*10);




// function print(x,y){
//   console.log(x+y);
//  }


// print(10,5);
// print(5,5);

//1
function print(x,y){
  return (x/y);
}

let variable=print(3,5);

console.log(variable+3);


//2
function addition(x,y,z,d){
return (x+y+z+d);
}
let add=addition(2,3,4,5);

console.log(add*2);

//3
function division(n,m){
  return(m/n);
}
let div=division(5,10);
console.log(div+10)



//4

function ram(a,b){
  return a+b;
}

function shyam(r,m){
  return m+r*10;
}
function raju(m,d){
  return d-m-10;
}
function singa(d,b){
  return b+d/2;
}

let step1=ram(5,10);
let step2=shyam(step1,10);
let step3=raju(step2,10);
let step4=singa(step3,10);

console.log(step4);


