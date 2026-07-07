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

function nextFact() {
    currentIndex = (currentIndex + 1) % facts[currentCategory].length;
    displayFact();
}

function showCategory(category) {
    currentCategory = category;
    currentIndex = 0;
    displayFact();
}

function searchFact() {

    const search = document.getElementById("search").value
        .toLowerCase()
        .trim();

    if (search === "") {
        displayFact();
        return;
    }

    for (const category in facts) {

        for (let i = 0; i < facts[category].length; i++) {

            if (facts[category][i].toLowerCase().includes(search)) {

                currentCategory = category;
                currentIndex = i;

                displayFact();
                return;
            }
        }
    }

    document.getElementById("fact").textContent =
        "❌ No matching fact found.";
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

    displayFact();

};
