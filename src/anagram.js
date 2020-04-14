function anagram(str1, str2) {
  if (str1.length !== str2.length) {
      return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of str1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of str2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
      if (!(key in frequencyCounter2)) {
          return false;
      }
      if (frequencyCounter2[key] !== frequencyCounter1[key]) {
          return false;
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

/*
true
false
true
false
false
true
true
*/