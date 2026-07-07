
const facts = {

general: [
"Honey never spoils.",
"Bananas are berries, but strawberries aren't.",
"A group of flamingos is called a flamboyance.",
"The shortest war in history lasted 38 minutes.",
"There are more stars than grains of sand on Earth.",
"Hot water can freeze faster than cold water.",
"A cloud can weigh over one million pounds.",
"The human nose can detect over one trillion smells.",
"The first alarm clock could only ring at 4 a.m.",
"Butterflies taste with their feet."
],

science: [
"Water boils at 100°C at sea level.",
"The human brain contains about 86 billion neurons.",
"Light travels at about 300,000 km per second.",
"The Earth revolves around the Sun.",
"DNA carries genetic information.",
"The human body has 206 bones.",
"Sound travels faster in water than air.",
"Plants convert sunlight into energy through photosynthesis.",
"The speed of sound is about 343 m/s.",
"The human heart beats about 100,000 times a day."
],

history: [
"The Great Wall of China took centuries to build.",
"The Eiffel Tower grows taller in summer.",
"The first Olympic Games were held in ancient Greece.",
"Julius Caesar was assassinated in 44 BC.",
"The Titanic sank in 1912.",
"The printing press was invented by Johannes Gutenberg.",
"The pyramids are over 4,500 years old.",
"Napoleon was once attacked by rabbits.",
"The Roman Empire lasted over 1,000 years.",
"The Statue of Liberty was a gift from France."
],

animals: [
"Octopuses have three hearts.",
"Sharks existed before trees.",
"A giraffe's tongue can be over 45 cm long.",
"Cheetahs are the fastest land animals.",
"Koalas sleep up to 22 hours a day.",
"Dolphins have names for each other.",
"Elephants cannot jump.",
"Owls can turn their heads about 270 degrees.",
"Penguins propose with pebbles.",
"A snail can sleep for three years."
],

space: [
"A day on Venus is longer than a year on Venus.",
"The Sun contains over 99% of the Solar System's mass.",
"Jupiter is the largest planet in our Solar System.",
"Neutron stars are incredibly dense.",
"The Moon has moonquakes.",
"Saturn could float in water because of its low density.",
"Mars has the tallest volcano in the Solar System.",
"There are billions of galaxies in the universe.",
"Mercury has no atmosphere to trap heat.",
"One million Earths could fit inside the Sun."
],

technology: [
"The first computer bug was an actual moth.",
"The first website went online in 1991.",
"Email existed before the World Wide Web.",
"The first computer mouse was made of wood.",
"The first webcam watched a coffee pot.",
"Over 90% of the world's data was created in recent years.",
"The first hard drive stored only 5 MB.",
"Bluetooth is named after a Viking king.",
"The first smartphone was released in 1994.",
"More than 5 billion people use the internet."
]

};
let currentCategory = "general";
let currentIndex = 0;

function displayFact() {
    document.getElementById("fact").textContent =
        facts[currentCategory][currentIndex];
}
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
function randomFact() {

    // Get all category names
    const categories = Object.keys(facts);

    // Pick a random category
    const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];

    // Pick a random fact from that category
    const randomIndex =
        Math.floor(Math.random() * facts[randomCategory].length);

    // Update current values
    currentCategory = randomCategory;
    currentIndex = randomIndex;

    // Display the fact
    displayFact();
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
