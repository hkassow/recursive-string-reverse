function reverseString(str) {
  let len = str.length
  if (len < 2){
    return str
  } else {
    return str[len-1]+reverseString(str.slice(1,len-1))+str[0]
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString('hi'));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString('catbaby'));
  console.log("Expecting: 'Hello this is a reversal function done recursively test input'");
  console.log("=>", reverseString('Hello this is a reversal function done recursively test input'))
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
