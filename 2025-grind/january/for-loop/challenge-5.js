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

const mgaHayopSaPalayan = (animals) => {
  let waterAnimals = [];
  let landAnimals = [];
  animals.forEach((animal) => {
    if (animal.name === "Kalabaw") {
      return;
    }

    if (animal.name === "Kalabaw" && animal.name.length > 5) {
      waterAnimals.push(`${animal.name} is a big water animal!`);
    } else if (animal.habitat === "water") {
      waterAnimals.push(`${animal.name} is in water!`);
    } else {
      landAnimals.push(`${animal.name} is on land`);
    }
  });

  return { water: waterAnimals, land: landAnimals };
};

console.log(mgaHayopSaPalayan(animals));
