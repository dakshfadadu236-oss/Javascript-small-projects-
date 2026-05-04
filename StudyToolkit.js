// JavaScript Study Toolkit (Console-Based)

let arr = [];

function showMenu() {
  return prompt(
    "JavaScript Toolkit Menu\n\n" +
    "1. Add Number\n" +
    "2. Show Array\n" +
    "3. Sum of Array\n" +
    "4. Find Max Number\n" +
    "5. Find Min Number\n" +
    "6. Reverse String\n" +
    "7. Check Palindrome\n" +
    "8. Sort Array\n" +
    "9. Exit\n\n" +
    "Enter your choice:"
  );
}

// Add number
function addNumber() {
  let num = Number(prompt("Enter number:"));
  arr.push(num);
  alert("Number added!");
}

// Show array
function showArray() {
  alert("Array: " + arr.join(", "));
}

// Sum of array
function sumArray() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  alert("Sum = " + sum);
}

// Max number
function findMax() {
  let max = Math.max(...arr);
  alert("Max = " + max);
}

// Min number
function findMin() {
  let min = Math.min(...arr);
  alert("Min = " + min);
}

// Reverse string
function reverseString() {
  let str = prompt("Enter a string:");
  let rev = str.split("").reverse().join("");
  alert("Reversed String: " + rev);
}

// Palindrome check
function checkPalindrome() {
  let str = prompt("Enter a string:");
  let rev = str.split("").reverse().join("");

  if (str === rev) {
    alert("It is a Palindrome");
  } else {
    alert("Not a Palindrome");
  }
}

// Sort array
function sortArray() {
  arr.sort((a, b) => a - b);
  alert("Sorted Array: " + arr.join(", "));
}

// Main loop
while (true) {
  let choice = showMenu();

  switch (choice) {
    case "1":
      addNumber();
      break;
    case "2":
      showArray();
      break;
    case "3":
      sumArray();
      break;
    case "4":
      findMax();
      break;
    case "5":
      findMin();
      break;
    case "6":
      reverseString();
      break;
    case "7":
      checkPalindrome();
      break;
    case "8":
      sortArray();
      break;
    case "9":
      alert("Exiting... Goodbye!");
      break;
    default:
      alert("Invalid choice!");
  }

  if (choice === "9") break;
}
