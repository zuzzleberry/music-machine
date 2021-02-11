// import * as Tone from 'tone'
// let Tone = require("tone");

const synth0 = new Tone.Synth().toDestination();
const synth1 = new Tone.Synth().toDestination();
const synth2 = new Tone.Synth().toDestination();
const synth3 = new Tone.Synth().toDestination();
const synth4 = new Tone.Synth().toDestination();
const synth5 = new Tone.Synth().toDestination();
const synth6 = new Tone.Synth().toDestination();
const synth7 = new Tone.Synth().toDestination();

synth0.oscillator.type = "sine";
synth1.oscillator.type = "sine";
synth2.oscillator.type = "sine";
synth3.oscillator.type = "sine";
synth4.oscillator.type = "sine";
synth5.oscillator.type = "sine";
synth6.oscillator.type = "sine";
synth7.oscillator.type = "sine";

let seq0;
let seq1;
let seq2;
let seq3;
let seq4;
let seq5;
let seq6;
let seq7;

let currentlyPlaying = false;
let sequencer = {
  "currentlyPlaying": false,

  "sequence": [
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  ],

  "scales": {
    "A": [440.00, 493.88, 523.25, 587.33, 659.26, 698.46, 783.99, 880.00]
  },

  sequenceToggle(e) {
    let gridNumberY;
    let gridNumberX;
    if (e.target.className === "toggle-off" || e.target.className === "toggle-on") {
      gridNumberY = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
      gridNumberX = Array.from(e.target.parentNode.children).indexOf(e.target);
    }
    

    if (e.target.className === "toggle-off") {
      
      for (i = 0; i < this.sequence.length; i++) {
          this.sequence[i][gridNumberX] = null;
          // console.log(e.target.parentElement.parentElement.children[i].children[gridNumberX].className = "toggle-off");
          // console.log(Array.from(e.target.parentNode.parentNode.children[i]).indexOf());
          // console.log(target[1].children)

          e.target.parentElement.parentElement.children[i].children[gridNumberX].className = "toggle-off"
      }
      
      e.target.className = "toggle-on";
      this.sequence[gridNumberY][gridNumberX] = 1;
      
    } else if (e.target.className === "toggle-on") {
      e.target.className = "toggle-off";
      this.sequence[gridNumberY][gridNumberX] = null;
    }
  
  },

  sequenceRender() {
    Tone.Transport.stop();
    Tone.Transport.start();
    
    for (i = 0; i < this.sequence.length; i++) {
      this.sequence[i].forEach((currentValue, index) => {
        
        if (currentValue === 1) {
          switch (i) {
            case 0:
              return this.sequence[i][index] = this.scales.A[7];
            case 1:
              return this.sequence[i][index] = this.scales.A[6];
            case 2:
              return this.sequence[i][index] = this.scales.A[5];
            case 3:
              return this.sequence[i][index] = this.scales.A[4];
            case 4:
              return this.sequence[i][index] = this.scales.A[3];
            case 5:
              return this.sequence[i][index] = this.scales.A[2];
            case 6:
              return this.sequence[i][index] = this.scales.A[1];
            case 7:
              return this.sequence[i][index] = this.scales.A[0];
          }
        }
      })
    }
  },

  sequencePlay() {
    console.log("playing!");

    this.sequenceRender();
    seq0 = new Tone.Sequence((time, note) => {
      synth0.triggerAttackRelease(note, 0.1, time);
    }, sequencer.sequence[0]).start();
    seq1 = new Tone.Sequence((time, note) => {
      synth1.triggerAttackRelease(note, 0.1, time);
    }, sequencer.sequence[1]).start();
    seq2 = new Tone.Sequence((time, note) => {
      synth2.triggerAttackRelease(note, 0.1, time);
    }, sequencer.sequence[2]).start();
    seq3 = new Tone.Sequence((time, note) => {
      synth3.triggerAttackRelease(note, 0.1, time);
    }, sequencer.sequence[3]).start();
    seq4 = new Tone.Sequence((time, note) => {
      synth4.triggerAttackRelease(note, 0.1, time);
    }, sequencer.sequence[4]).start();
    seq5 = new Tone.Sequence((time, note) => {
      synth5.triggerAttackRelease(note, 0.1, time);
    }, sequencer.sequence[5]).start();
    seq6 = new Tone.Sequence((time, note) => {
      synth6.triggerAttackRelease(note, 0.1, time);
    }, sequencer.sequence[6]).start();
    seq7 = new Tone.Sequence((time, note) => {
      synth6.triggerAttackRelease(note, 0.1, time);
    }, sequencer.sequence[7]).start();



    Tone.Transport.start();
    // Tone.Transport.seconds = 0;
  },

  sequenceStop() {
    Tone.Transport.stop();
    seq0.stop();
    seq1.stop();
    seq2.stop();
    seq3.stop();
    seq4.stop();
    seq5.stop();
    seq6.stop();
    
    console.log("stopped!");
  }
}



document.querySelector("#start-button")?.addEventListener('click', async () => {
	await Tone.start()
  document.querySelector("#splash-screen").style.display = "none";
  document.querySelector("#beat-maker").style.display = "flex";
	console.log('audio is ready')
})

document.addEventListener("mousedown", (e) => {
  if (sequencer.currentlyPlaying !== true) {
    console.log(Boolean(sequencer.currentlyPlaying))
    if (e.target.className === "toggle-off" || e.target.className === "toggle-on") {
      sequencer.sequenceToggle(e);
    }
  }
})
document.addEventListener("click", (e) => {
  if (e.target.id === "stop" || e.target.id === "stop-icon") {
    if (sequencer.currentlyPlaying) {
      sequencer.sequenceStop();
      sequencer.currentlyPlaying = false;
    }
  }
  if (e.target.id === "play" || e.target.id === "play-icon") {
    if (!sequencer.currentlyPlaying) {
      sequencer.sequencePlay();
      sequencer.currentlyPlaying = true;
    }

  }
})




// buggy code to implement drag to draw

// let mouseDown = 0;
// document.body.onmousedown = function() { 
//   ++mouseDown;
// }
// document.body.onmouseup = function() {
//   --mouseDown;
// }

// console.log(document.onmousedown)
// document.addEventListener("mouseover", (e) => {
//   if (mouseDown === 1) {
//     if (sequencer.currentlyPlaying !== true) {
//       sequencer.sequenceToggle(e);
//     }
    
//       }
// })