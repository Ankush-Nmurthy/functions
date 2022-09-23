// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average


function avg(x) {
  let sum = 0;
  let count = 0;
  for (let i = 1; i <= x; i++) {
      sum = sum + i;
      count++;
  }if(sum>0){
    return (sum / count);
  }else{
    return 0;
  }
  
}

let average = avg(0);
console.log(average);

