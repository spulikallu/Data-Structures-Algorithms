function same(arr1, arr2){
  //isSquareAvailable = false;
  //result = true;
  
      //arr1.length !== arr2.length
      // else return false;
  
  
      //foreach arr1 
          // foreach arr2
              //  isSquareAvailable = false;
              // if arr1 value square equals arr2 value
                  // isSquareAvailable = true;
                  // break;
  
           // if isSquareAvailable == false
           // result = false;
           // break;
  // return result;
  }
  
  //Nive ~ not so best possible solution
  //indexOf also loops
  // ? arr2 needs to be sliced as well as get to see a match
  
  
  //console.log(3**2);
  
  //power value **
  /*
  var obj = {name: "sandeep", age: "25"};
  console.log('ages' in obj);
  
  */
  
  
  
  function same(arr1, arr2){
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  
      if(arr1.length !== arr2.length ){
          return false;
      }
  
      for(let val of arr1){
          frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
      }
  
      for(let val of arr2){
          frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
      }
  
      for(key in frequencyCounter1){
          if (!(key**2 in frequencyCounter2)){
              return false;
          }
          if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
              return false;
          }
      }
  
      //console.log(frequencyCounter1);
      //console.log(frequencyCounter2);
      return true;
  
  }
  
  same([2,3],[4,4,9]);
