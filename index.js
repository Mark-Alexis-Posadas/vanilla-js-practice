function trafficLightSystem(action) {
  switch (action.toLowerCase()) {
    case "red":
      return "Stop";
    case "yellow":
      return "Slow down";
    case "green":
      return "Go";
    default:
      return "Just wait!";
  }
}

console.log(trafficLightSystem("Red")); // Output: "Stop"
console.log(trafficLightSystem("Yellow")); // Output: "Slow down"
console.log(trafficLightSystem("Green")); // Output: "Go"
console.log(trafficLightSystem("Blue")); // Output: "Just wait!"
