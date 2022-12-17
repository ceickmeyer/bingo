const fruits = [
  "Home Invasion",
  "Christmas",
  "Anti-Hero",
  "Celebrity Cameo",
  "Torture",
  "Mismatched Buddies",
  "Snark",
  "Narration",
  "Alchohol",
  "Fourth Wall Break",
  "Catchphrase",
  "Revolver",
  "Explosion",
  "Swears",
  "Boobs",
  "Squibs",
  "Unexpected Death",
  "Main Character Fucks Up",
  "Quote Fit for a Trailer",
  "Supervillain Lair",
  "MacGyvering",
  "Chekhov's Gun",
  "Bad Guy Monologue",
  "Private Detective",
  "Kid Actor",
  "Foreshadowing",
  "Grizzled Detective",
];

// Shuffle the fruit array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(fruits);

const fruitCells = document.querySelectorAll("td");

// Populate the fruit array with the shuffled fruit names
fruitCells.forEach((cell, index) => {
  // Assign "Free Space" to the center cell
  if (index === 12) {
    cell.innerHTML = "Free Space";
    cell.style.backgroundColor = "red";
  } else {
    cell.innerHTML = fruits[index];
  }
});

// Add event listeners to each cell
fruitCells.forEach((cell) => {
  // Don't add an event listener to the center cell
  if (cell.innerHTML !== "Free Space") {
    cell.addEventListener("click", (event) => {
      event.target.style.backgroundColor = "red";
    });
  }
});

// Set the font size and cell width
fruitCells.forEach((cell) => {
  cell.style.fontSize = "1em";
  cell.style.width = "100px";
});