//add two numbers

//2. inputs - ? what kind of numbers, how large it is going to be ? should we consider floating point numbers?
// what if some one wants to add 10 numbers, is it going to consider only 2

//3. out .. should to be an integery or should it be float... return string ???

//4. yes??? pass one number ? depends ? 
//5. How should i label important parts of the problem

//Explore Examples
/*
charCount("aaa"); //{a:3} // {a:3, b:0 ...}
charCount("hello"); //{h:1, e:1, l:2, o:1}

charCount("my phone number is 182763") //dollar sign, space symbols
"Hello hi" //upper case, lowe case

charCount(); // ? charCount(''); //
charCount({}) // ? understanding edge cases ? real world

// could this be right way od doing it
// Break it down!!

function charCount(str){
    // do something
    // return an object alphanumeric characters lower case
}


function charCount(str){
    // make object to return at end
    // loop over string for each character...
           // if the char is number/letter a key in the object, add one to count
           // if the char is number/letter not in object, add it and set count to 1
           // if char is something else (space, symbol etc.) then do not anything
    // return an object alphanumeric characters lower case
}
*/
/*
function charCount(str){
    var result  = {};
    for(var i=0; i<str.length; i++){
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if(result[char]>0){
                result[char]++;
            }
            else{
                result[char] = 1;
            }        
        }
    }
    return result;
}
*/

//May be there is a better way

function charCount(str) {
  var result = {};
  for (var char of str) {
      char = char.toLowerCase();
      if (isAlphaNumeric(char)) {
          result[char] = ++result[char] || 1;
      }
  }
  return result;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // numeric (0-9)
  !(code > 64 && code < 91) && // numeric alpha (A-Z)  
  !(code > 96 && code < 123)) {
      // lower alpha (a-z)
      return false;
  }
  return true;
}
