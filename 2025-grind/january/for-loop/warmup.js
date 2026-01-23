const products = [
  { name: "Laptop", price: 5000, stock: 5, category: "Electronics" },
  { name: "Mouse", price: 500, stock: 0, category: "Electronics" },
  { name: "Keyboard", price: 1500, stock: 3, category: "Electronics" },
  { name: "Notebook", price: 100, stock: 20, category: "School" },
  { name: "Ballpen", price: 20, stock: 50, category: "School" },
];

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

function countCategory(products) {
  return products.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = 0;
    }

    acc[item.category] = acc[item.category] + 1;
    return acc;
  }, {});
}

function totalPrice(products) {
  const totalAmount = products.reduce(
    (acc, item) => acc + item.price * item.stock,
    0,
  );
  return totalAmount;
}

function waterAnimals(animals) {
  let result = [];
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].habitat === "water") {
      result.push(`${animals[i].name} lives in ${animals[i].habitat}`);
    }
  }
  return result;
}

function countHabitat(animals) {
  let waterAnimal = 0;
  let landAnimal = 0;

  for (let i = 0; i < animals.length; i++) {
    if (animals[i].habitat === "water") {
      waterAnimal++;
    } else {
      landAnimal++;
    }
  }
  return { land: landAnimal, water: waterAnimal };
}

function habitatGrouping(animals) {
  let waterAnimal = [];
  let landAnimal = [];

  for (let i = 0; i < animals.length; i++) {
    if (animals[i].habitat === "water") {
      waterAnimal.push(animals[i]);
    } else {
      landAnimal.push(animals[i]);
    }
  }
  return { land: landAnimal, water: waterAnimal };
}

function getAllLandAnimals(animals) {
  let result = [];

  for (let i = 0; i < animals.length; i++) {
    if (animals[i].habitat === "land") {
      result.push(animals[i].name.toUpperCase());
    }
  }
  return result;
}

function warmUp(animals) {
  let result = [];
  for (let i = 0; i < animals.length; i++) {
    for (let j = 0; j < animals.length; j++) {
      if (i === j) continue;

      const output = `${animals[i].name} - ${animals[j].name}`;
      result.push(output);
    }
  }
  return result;
}
console.log(warmUp(animals));
