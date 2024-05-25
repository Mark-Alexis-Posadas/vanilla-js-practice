// Write a program that takes a month (1-12) as input and prints the corresponding season:
// Winter: December (12), January (1), February (2)
// Spring: March (3), April (4), May (5)
// Summer: June (6), July (7), August (8)
// Autumn: September (9), October (10), November (11)

function seasonIdentifier(month) {
  if (month === 12 || month === 1 || month === 2) {
    return "Winter";
  } else if (month === 3 || month === 4 || month === 5) {
    return "Spring";
  } else if (month === 6 || month === 7 || month === 8) {
    return "Summer";
  } else if (month === 9 || month === 10 || month === 11) {
    return "Autumn";
  } else {
    return "Invalid";
  }
}

console.log(seasonIdentifier(11));
