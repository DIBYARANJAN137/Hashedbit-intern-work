// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
  }
  
  console.log(correctfn("I luv JavaScript", "luv", "love"));  
  
