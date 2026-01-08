const mgaHayopSaPalayan = (animals) => {
  const mappedAnimals = animals.map((animal) => {
    return animal.age >= 5
      ? `${animal.name} is an adult`
      : `${animal.name} is young`;
  });

  return mappedAnimals;
};

module.exports = mgaHayopSaPalayan;
