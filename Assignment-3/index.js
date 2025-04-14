
// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter

const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];
  
  const filteredStates = states.filter(function(state) {
    const firstLetter = state[0].toLowerCase();   
    return !['a', 'e', 'i', 'o', 'u'].includes(firstLetter);  
  });
  
  console.log(filteredStates);

//   Q2) let str = 'I love my India'
//   output expected = 'India my love I'
//   Write code for this.

let str1='I love my India';
let words=str1.split(' ');
console.log(words);
let reversed=words.reverse();
console.log(reversed);
let result=reversed.join(' ');
console.log(result);


// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let string = 'INDIA'
let arr=string.split('');
arr.splice(3,0,'O','N','E','S');
let result=arr.join('');
console.log(result);

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


// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
  }
  
  console.log(correctfn("I luv JavaScript", "luv", "love"));  
  


// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

const inputArr=[1,2,3,9,10,7,5,4,3];
const outPutArray=inputArr.filter((num)=>{
    return num>5;
   });
   console.log(outPutArray);


// Q7)
// const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce.

const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
  ];
  
  const output = students.map(student => {
    const total = student.scores.reduce((sum, score) => sum + score, 0);
    const avg = total / student.scores.length;
    return { name: student.name, average: avg };
  });
  
  console.log(output);
  

// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function repeatedDigitSum(num) {
    while (num >= 10) {
      num = num.toString().split('').reduce((a, b) => a + Number(b), 0);
    }
    return num;
  }
  
  console.log(repeatedDigitSum(456));  
  

// Q9) Write a function to count the number of words in a paragraph.

function countWords(Para){
      let arr=para.split(' ');
       let length=arr.length;
      console.log(`number of words in the paragraph are ${length}`);
    }
    let para="Hi there ! I am Using Whatsapp";
    countWords(para);
   

// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

 function result(str){
  let arr=str.split('');
  let newArr=arr.reverse();
  let result=newArr.join('');
  console.log(result);
}

result("Hello");






// Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]
    
// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.

const input = [
    {
      student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
      }
    },
    {
      student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
      }
    },
    {
      student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
      }
    }
  ];
  
  const output1 = input.map(studentObj => {
    let key = Object.keys(studentObj)[0];
    let marks = Object.values(studentObj[key]);
    let avg = marks.reduce((a, b) => a + b, 0) / marks.length;
    return {
      [key]: { average: Math.floor(avg) }
    };
  });
  
  console.log(output1);
  