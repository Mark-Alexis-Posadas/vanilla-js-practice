// Day of the Week
// Input: A number from 1 to 7
// Output: The corresponding day of the week (1 for Monday, 2 for Tuesday, etc.).

function dayOfTheWeek(day) {
  if (day === 1) {
    return "Monday";
  } else if (day === 2) {
    return "Tuesday";
  } else if (day === 3) {
    return "Wednesday";
  } else if (day === 4) {
    return "Thursday";
  } else if (day === 5) {
    return "Friday";
  } else if (day === 6) {
    return "Saturday";
  } else if (day === 7) {
    return "Sunday";
  } else {
    return "Holiday";
  }
}

console.log(dayOfTheWeek(5));

function dayOfTheWeek(day, name) {
  let result = [];
  for (let i = 0; i < day.length; i++) {
    result.push(`${day[i]} ${name[i]}`);
  }

  return result;
}

console.log(
  dayOfTheWeek(
    [1, 2, 3, 4, 5, 6, 7],
    [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ]
  )
);
