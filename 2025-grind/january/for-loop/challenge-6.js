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
  const water = animals
    .filter((a) => a.name !== "Kalabaw" && a.habitat === "water")
    .map((a) =>
      a.name.length > 5
        ? `${a.name} is a big water animal!`
        : `${a.name} is in water!`,
    );

  const land = animals
    .filter((a) => a.name !== "Kalabaw" && a.habitat === "land")
    .map((a) => `${a.name} is on land`);

  return { water, land };
};

console.log(mgaHayopSaPalayan(animals));
