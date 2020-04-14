function anagram(str1, str2) {
  if (str1.length !== str2.length) {
      return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of str1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let i=0; i<str2.length; i++){
      if(!frequencyCounter1[str2[i]]){
          return false;
      }
      else{
          frequencyCounter1[str2[i]] -= 1;
      }
  }


  return true;
}

console.log(anagram(" ", " "));
console.log(anagram("aaz", "zza"));
console.log(anagram("anagram", "nagaram"));
console.log(anagram("rat", "car"));
console.log(anagram("awesome", "awesom"));
console.log(anagram("qwerty", "qeywrt"));
console.log(anagram("texttwisttime", "timetwisttext"));
