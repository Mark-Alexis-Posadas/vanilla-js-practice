function mgaHayopSaPalayan(animals) {
  let waterAnimals = [];
  let landAnimals = [];

  for (let i = 0; i < animals.length; i++) {
    if (
      animals[i] === "tagak" ||
      animals[i] === "tilapia" ||
      animals[i] === "bangus"
    ) {
      waterAnimals.push(animals[i]);
    } else {
      landAnimals.push(animals[i]);
    }
  }
  return { water: waterAnimals, land: landAnimals };
}

module.exports = mgaHayopSaPalayan;
