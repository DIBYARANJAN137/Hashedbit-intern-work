// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let str = "JavaScript is a powerful language";

let vowels = "aeiouAEIOU";
let vowelCount = 0;
let consonantCount = 0;

for (let char of str) {
  if (/[a-zA-Z]/.test(char)) { 
    if (vowels.includes(char)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
}

console.log("Vowels:", vowelCount);        
console.log("Consonants:", consonantCount); 