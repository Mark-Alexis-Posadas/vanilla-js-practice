// Create an object representing a list of countries with their populations and continents. Use a loop to print each country's name along with its population and continent.

function listOfCountries(countries) {
  let results = [];
  for (let i = 0; i < countries.length; i++) {
    const element = `Country: ${countries[i].name}, Population: ${countries[
      i
    ].population.toLocaleString()}, Continent: ${countries[i].continent}`;

    results.push(element);
  }
  return results;
}

let countries = [
  { name: "USA", population: 331000000, continent: "North America" },
  { name: "Brazil", population: 212000000, continent: "South America" },
  { name: "India", population: 1380000000, continent: "Asia" },
];

let result = listOfCountries(countries);
console.log(result);
