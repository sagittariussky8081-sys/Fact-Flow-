const facts = {
  science: [
    "Water boils at 100°C at sea level.",
    "The human brain contains about 86 billion neurons."
  ],

  animals: [
    "Octopuses have three hearts.",
    "Sharks existed before trees."
  ],

  history: [
    "The Great Wall of China took centuries to build.",
    "The Eiffel Tower grows taller in summer."
  ],

  space: [
    "A day on Venus is longer than a year on Venus.",
    "The Sun contains over 99% of the Solar System's mass."
  ],

  technology: [
    "The first computer bug was an actual moth.",
    "The first website went online in 1991."
  ],

  general: [
    "Honey never spoils.",
    "Bananas are berries, but strawberries aren't."
  ]
};

let index = 0;
let currentCategory = "general";
function nextFact() {
  index = (index + 1) % facts.length;
  document.getElementById("fact").textContent = facts[index];
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};
function searchFact() {
    const searchText = document.getElementById("search").value.toLowerCase();
    const factElement = document.getElementById("fact");

    const foundFact = facts.find(fact =>
        fact.toLowerCase().includes(searchText)
    );
if (foundFact) {
    factElement.textContent = foundFact;
} else {
    factElement.textContent = "No fact found. Try another keyword.";
}
}
function showCategory(category) {
    currentCategory = category;
    index = 0;

    document.getElementById("fact").textContent =
        facts[currentCategory][index];
}
