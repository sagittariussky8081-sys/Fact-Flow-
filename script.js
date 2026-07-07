const facts = {
    general: [
        "Honey never spoils.",
        "Bananas are berries, but strawberries aren't.",
        "A group of flamingos is called a flamboyance."
    ],

    science: [
        "Water boils at 100°C at sea level.",
        "The human brain contains about 86 billion neurons.",
        "Light travels at about 300,000 km per second."
    ],

    history: [
        "The Great Wall of China took centuries to build.",
        "The Eiffel Tower grows taller in summer.",
        "The first Olympic Games were held in ancient Greece."
    ],

    animals: [
        "Octopuses have three hearts.",
        "Sharks existed before trees.",
        "A giraffe's tongue can be over 45 cm long."
    ],

    space: [
        "A day on Venus is longer than a year on Venus.",
        "The Sun contains over 99% of the Solar System's mass.",
        "Jupiter is the largest planet in our Solar System."
    ],

    technology: [
        "The first computer bug was an actual moth.",
        "The first website went online in 1991.",
        "Email existed before the World Wide Web."
    ]
};

let currentCategory = "general";
let currentIndex = 0;

// Display current fact
function displayFact() {
    const factElement = document.getElementById("fact");

    factElement.classList.remove("fade");

    setTimeout(() => {
        factElement.textContent =
            facts[currentCategory][currentIndex];

        factElement.classList.add("fade");
    }, 50);
}

// Next Fact
function nextFact() {
    currentIndex++;

    if (currentIndex >= facts[currentCategory].length) {
        currentIndex = 0;
    }

    displayFact();
}

// Change Category
function showCategory(category) {
    currentCategory = category;
    currentIndex = 0;
    displayFact();
}

// Search Facts
function searchFact() {

    const search = document
        .getElementById("search")
        .value
        .toLowerCase()
        .trim();

    if (search === "") {
        displayFact();
        return;
    }

    for (const category in facts) {

        for (const fact of facts[category]) {

            if (fact.toLowerCase().includes(search)) {

                document.getElementById("fact").textContent = fact;
                return;

            }

        }

    }

    document.getElementById("fact").textContent =
        "❌ No matching fact found.";
}

// Dark Mode
function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

}

// Load Theme
window.onload = function () {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    displayFact();

};
