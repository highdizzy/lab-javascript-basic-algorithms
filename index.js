let hacker1 = 'John'
let hacker2 = 'Mahmoud'
let count1 = hacker1.length
let count2 = hacker2.length

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }
else {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
}

console.log(hacker1.toUpperCase());

function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse("");
  let joinArray = reverseArray.join("");
      console.log(reverseArray);

    return joinArray;
    console.log(joinArray);

}

reverseString("John");

