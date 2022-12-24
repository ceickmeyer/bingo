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
  "Private Dick",
  "Kid actor",
  "Foreshadowing",
  "Grizzled Detective",
  "Ambulance Wrapup",
  "Slick Bad Dude(s)",
  "Accidental Death",
  "Broken Glass",
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

fruitCells.forEach((cell) => {
  // Don't add an event listener to the center cell
  if (cell.innerHTML !== "Free Space") {
    cell.addEventListener("click", (event) => {
      // Get the computed style of the element
      const computedStyle = window.getComputedStyle(event.target);

      // Check the computed background color of the cell
      if (computedStyle.backgroundColor === "rgb(255, 255, 255)") {
        // If the cell is white, change it to a random Christmas-themed color
        const christmasColors = [
          "#f5624e",
          "#cc221e",
          "#33a560",
          "#0f8a5e",
          "#235e6e",
        ];
        const randomIndex = Math.floor(Math.random() * christmasColors.length);
        event.target.style.backgroundColor = christmasColors[randomIndex];
      } else {
        // If the cell is not white, change it to white
        event.target.style.backgroundColor = "white";
      }
    });
  }
});

// Set the font size and cell width
fruitCells.forEach((cell) => {
  cell.style.fontSize = "1em";
  cell.style.width = "100px";
});
