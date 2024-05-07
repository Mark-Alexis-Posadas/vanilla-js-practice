// Create an object representing a list of songs with their durations in seconds. Use a loop to print each song's name along with its duration in minutes and seconds.

function songDuration(songs) {
  let results = [];

  for (let i = 0; i < songs.length; i++) {
    const element = `Song ${songs[i].name}, ${songs[i].duration / 60}`;
    results.push(element);
  }

  return results;
}
let songs = [
  { name: "Bohemian Rhapsody", duration: 367 },
  { name: "Hotel California", duration: 391 },
  { name: "Stairway to Heaven", duration: 482 },
];

let result = songDuration(songs);

console.log(result);
