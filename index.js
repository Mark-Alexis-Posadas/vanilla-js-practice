// Traffic Light Simulator:

// Write a program that takes a color input (red, yellow, green) and prints what the driver should do: "Stop" for red, "Get ready" for yellow, and "Go" for green.

function trafficLightSimulator(light) {
  if (light === "red") {
    return "Stop";
  } else if (light === "yellow") {
    return "Get ready";
  } else if (light === "green") {
    return "Go";
  } else {
    return "Invalid";
  }
}

console.log(trafficLightSimulator("red"));
console.log(trafficLightSimulator("yellow"));
console.log(trafficLightSimulator("green"));
