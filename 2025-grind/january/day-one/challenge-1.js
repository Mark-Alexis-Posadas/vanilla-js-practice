// function na tumatanggap ng array bilang parameter
function mgaHayopSaPalayan(animals) {
  let result = [];
  for (let i = 0; i < animals.length; i++) {
    if (
      animals[i] === "tagak" ||
      animals[i] === "tilapia" ||
      animals[i] === "bangus"
    ) {
      result.push(`${animals[i]} lives in water`);
      console.log;
    } else {
      result.push(`${animals[i]} lives on land`);
    }
  }

  return result;
}

// export function para magamit sa index.js
module.exports = mgaHayopSaPalayan;
