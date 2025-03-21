// groceryList.js

// Ask the user if they want to create a grocery list
let List = prompt("Do you want to create a grocery list? (y/n)");

if (List.toLowerCase() === "y") {
  // Ask the user for the number of items
  let numItems = parseInt(prompt("How many items do you want to add to the grocery list?"));

  // Initialize an empty array for the grocery list
  let grocery = [];

  // Loop to get the items from the user
  for (let i = 0; i < numItems; i++) {
    let item = prompt(`Enter item ${i + 1}:`);
    grocery.push(item); // Add the item to the list
  }

  // Sort and reverse the grocery list safely
  let grocerySort = [...grocery].sort(); // Sorted version
  let groceryReverse = [...grocery].reverse(); // Reversed version

  // Display the lists using alert
  alert(`Original Grocery List: ${grocery.join(", ")}`);
  alert(`Sorted Grocery List: ${grocerySort.join(", ")}`);
  alert(`Reversed Grocery List: ${groceryReverse.join(", ")}`);
} else {
  alert("No grocery list created.");
}