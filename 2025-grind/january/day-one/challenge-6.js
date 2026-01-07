const mgaHayopSaPalayan = (animals) => {
  const water = animals
    .filter((a) => a.name !== "Kalabaw" && a.habitat === "water")
    .map((a) =>
      a.name.length > 5
        ? `${a.name} is a big water animal!`
        : `${a.name} is in water!`
    );

  const land = animals
    .filter((a) => a.name !== "Kalabaw" && a.habitat === "land")
    .map((a) => `${a.name} is on land`);

  return { water, land };
};

module.exports = mgaHayopSaPalayan;
