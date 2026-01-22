const animals = [
  { name: "Tagak", habitat: "water" },
  { name: "Tilapia", habitat: "water" },
  { name: "Bangus", habitat: "water" },
  { name: "Kalabaw", habitat: "land" },
  { name: "Baka", habitat: "land" },
  { name: "Kambing", habitat: "land" },
  { name: "Aso", habitat: "land" },
  { name: "Palaka", habitat: "water" },
  { name: "Tipaklong", habitat: "land" },
];

function mgaHayopSaPalayan(animals) {
  let waterAnimals = [];
  let landAnimals = [];
  for (let i = 0; i < animals.length; i++) {
    const element = animals[i];
    if (element.name === "Kalabaw") {
      continue;
    }

    if (element.habitat === "water" && element.name.length > 5) {
      waterAnimals.push(`${element.name} is a big water animal!`);
    } else if (element.habitat === "water") {
      waterAnimals.push(`${element.name} is in water!`);
    } else {
      landAnimals.push(`${element.name} is on land`);
    }
  }

  return { water: waterAnimals, land: landAnimals };
}

console.log(mgaHayopSaPalayan(animals));
