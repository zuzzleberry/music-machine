// import * as Tone from 'tone'
// let Tone = require("tone");

const { Tone } = require("tone/build/esm/core/Tone");

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

    let gridNumberY = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
    let gridNumberX = Array.from(e.target.parentNode.children).indexOf(e.target);

    if (e.target.className === "toggle-off") {
      let target = document.querySelectorAll(".note-row")
      for (i = 0; i < this.sequence.length; i++) {
          this.sequence[i][gridNumberX] = null;
          // e.target.parentNode.parentNode[i]

          console.log(e.target.parentElement.parentElement.children[i].children[gridNumberX].className = "toggle-off");
          console.log(Array.from(e.target.parentNode.parentNode.children[i]).indexOf());
          console.log(target[1].children)
          // target[1].parentElement
      }
      

      e.target.className = "toggle-on";
      this.sequence[gridNumberY][gridNumberX] = 1;
      
    } else if (e.target.className === "toggle-on") {
      e.target.className = "toggle-off";
      this.sequence[gridNumberY][gridNumberX] = null;
    }
    this.sequenceRender();
    console.log(this.sequence)

  },

  sequenceRender() {
    // Tone.Transport.stop();
    // Tone.Transport.start();
    
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
      // subdivisions are given as subarrays
    }, sequencer.sequence[0]).start();
    seq1 = new Tone.Sequence((time, note) => {
      synth1.triggerAttackRelease(note, 0.1, time);
      // subdivisions are given as subarrays
    }, sequencer.sequence[1]).start();
    seq2 = new Tone.Sequence((time, note) => {
      synth2.triggerAttackRelease(note, 0.1, time);
      // subdivisions are given as subarrays
    }, sequencer.sequence[2]).start();
    seq3 = new Tone.Sequence((time, note) => {
      synth3.triggerAttackRelease(note, 0.1, time);
      // subdivisions are given as subarrays
    }, sequencer.sequence[3]).start();
    seq4 = new Tone.Sequence((time, note) => {
      synth4.triggerAttackRelease(note, 0.1, time);
      // subdivisions are given as subarrays
    }, sequencer.sequence[4]).start();
    seq5 = new Tone.Sequence((time, note) => {
      synth5.triggerAttackRelease(note, 0.1, time);
      // subdivisions are given as subarrays
    }, sequencer.sequence[5]).start();
    seq6 = new Tone.Sequence((time, note) => {
      synth6.triggerAttackRelease(note, 0.1, time);
      // subdivisions are given as subarrays
    }, sequencer.sequence[6]).start();
    seq7 = new Tone.Sequence((time, note) => {
      synth6.triggerAttackRelease(note, 0.1, time);
      // subdivisions are given as subarrays
    }, sequencer.sequence[7]).start();



    Tone.Transport.start();
    // Tone.Transport.seconds = 0;
  },

  sequenceStop() {
    seq0.stop();
    seq1.stop();
    seq2.stop();
    seq3.stop();
    seq4.stop();
    seq5.stop();
    seq6.stop();

    console.log("stopped!");

    Tone.Transport.stop();

  }
}

document.addEventListener("click", (e) => {
  if (e.target.className === "toggle-off" || "toggle-on") {
    
    sequencer.sequenceToggle(e);
  }
  if (e.target.id === "play") {
    if (!sequencer.currentlyPlaying) {
      sequencer.sequencePlay();
      sequencer.currentlyPlaying = true;
      // e.target.style.background = "red"
    }

  }
  if (e.target.id === "stop") {
    if (sequencer.currentlyPlaying) {
      sequencer.sequenceStop();
      sequencer.currentlyPlaying = false;
    }

  }
  console.log(e.target)
})