
const facts = [
  "Honey never spoils.",
  "Octopuses have three hearts.",
  "Bananas are berries, but strawberries aren't.",
  "The Eiffel Tower grows taller in summer.",
  "A day on Venus is longer than a year on Venus.",
  "Sharks existed before trees."
];

let index = 0;

function nextFact() {
  index = (index + 1) % facts.length;
  document.getElementById("fact").textContent = facts[index];
}
