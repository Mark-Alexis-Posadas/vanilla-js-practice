function weatherAdvice(action) {
  switch (action.toLowerCase()) {
    case "sunny":
      return "Wear sunglasses";
    case "rainy":
      return "Take an umbrella";
    case "snowy":
      return "Wear warm clothes";
    case "windy":
      return "Hold onto your hat";
    default:
      return "Just wait for the advice!";
  }
}

console.log(weatherAdvice("Sunny")); // Output: "Wear sunglasses"
console.log(weatherAdvice("Rainy")); // Output: "Take an umbrella"
console.log(weatherAdvice("Snowy")); // Output: "Wear warm clothes"
console.log(weatherAdvice("Windy")); // Output: "Hold onto your hat"
console.log(weatherAdvice("Cloudy")); // Output: "Just wait for the advice!"
