// Create an object representing a list of songs with their durations in seconds. Use a loop to print each song's name along with its duration in minutes and seconds.

function songDuration(songs) {
  let results = [];

  for (let i = 0; i < songs.length; i++) {
    const minutes = Math.floor(songs[i].duration / 60);
    const extraSeconds = songs[i].duration % 60;
    const element = `Song ${songs[i].name}, Duration: ${minutes}:${
      extraSeconds >= 10 ? extraSeconds : "0" + extraSeconds
    }`;
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
