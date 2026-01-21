const animals = ["Kalabaw", "Baka", "Kambing", "Aso", "Tagak", "Tipaklong"];

function mgaHayopSaPalayan(animals) {
  // let output = [];
  // animals.forEach((animal) => {
  //   if (animal === "Kalabaw") {
  //     output.push(`${animal} is resting`);
  //   } else {
  //     output.push(`${animal} is working in the field`);
  //   }
  // });
  // return output;

  const output = animals.map((animal) =>
    animal === "Kalabaw"
      ? `${animal} is resting`
      : `${animal} is working in the field`,
  );

  return output;
}

console.log(mgaHayopSaPalayan(animals));
