import playSound from 'play-sound';
import { createWriteStream } from 'fs';

const player = playSound();


player.play('foo.mp3', function (err) {
  if (err) {
    console.log("Error playing file:", err);
  } else {
    console.log("MP3 file is playing!");
  }
});

player.play('foo.mp3', { timeout: 300 }, function (err) {
  if (err) {
    console.log("Error playing file with timeout:", err);
  } else {
    console.log("MP3 file played with timeout!");
  }
});

player.play('foo.mp3', { afplay: ['-v', 0.5] }, function (err) {
  if (err) {
    console.log("Error playing with afplay settings:", err);
  } else {
    console.log("MP3 file played with afplay settings!");
  }
});


const audio = player.play('foo.mp3', function (err) {
  if (err) {
    console.log("Error playing file:", err);
  } else {
    console.log("MP3 file is playing!");
  }
});


setTimeout(() => {
  console.log("Killing the audio process...");
  audio.kill(); 
}, 5000); 
