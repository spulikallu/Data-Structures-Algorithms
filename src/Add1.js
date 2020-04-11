function addUpTo(n){
  var sum = 0;
  for(var i=1; i<=n; i++){
      sum += i;
  }
  return sum;
}

console.log(performance.now())
var t1 = performance.now();
addUpTo(1000000000);
console.log(performance.now())
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds`);
