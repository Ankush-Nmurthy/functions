//addition multiplication division subtraction


// function add(a,b){

// console.log(a+b);
// }

// function multi(c,d){
// console.log(c*d);
// }

// function sub(e,f){
// console.log(f-e);
// }

// function div(h,g){
// console.log(h/g);
// }


// for(let i=0;i<=5;i++){
//   add(10,5);
//   multi(4,9);
//   div(10,5);
// }



// function print(x){
//   for(let i=0;i<=4;i++){
//    console.log(x) 
//   }
// }

// print("praveen 9");
// print("bulde");
// print("ankush");


// function division(a,b){
//   return a/b;
// }

// let ans=division(20,5)

// console.log(ans);



function ram(a,b) {
  return a+b;
}

function shyam(x) {
  return x*10
}

function raj(y) {
  return y/2;
}

function babu(z){
  return z-25
}

let ans=ram(5,10);

let step1=shyam(ans);

let step2=raj(step1);

let step3=babu(step2);


console.log(ans)
console.log(step1)
console.log(step2)
console.log(step3)


//LOCAL GLAOBAL

let pm="Ankush"


function cm(){
  let p="praveen";
  console.log(pm);
}

function cd(){
  let p="punith";
  console.log(p);
}

function da(){
  let p="gangadhar";
  console.log(pm);
}

cm();
cd();
da();

