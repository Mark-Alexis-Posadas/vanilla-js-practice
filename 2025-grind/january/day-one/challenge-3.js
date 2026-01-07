function mgaHayopSaPalayan(animals) {
  let waterAnimals = [];
  let landAnimals = [];
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].name === "Kalabaw") {
      continue;
    } else if (animals[i].habitat === "water") {
      waterAnimals.push(animals[i].name);
    } else {
      landAnimals.push(animals[i].name);
    }
  }
  return { water: waterAnimals, land: landAnimals };
}

module.exports = mgaHayopSaPalayan;
