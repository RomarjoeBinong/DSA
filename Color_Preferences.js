
// Create an empty array to store favorite colors
let favoriteColors = [];

// Use a loop to allow the user to input three colors
for (let i = 0; i < 3; i++) {
  let color = prompt(`Enter color ${i + 1}:`);
  favoriteColors.push(color); // Add the new color to the array
  console.log(`Updated list of favorite colors: ${favoriteColors}`);
}