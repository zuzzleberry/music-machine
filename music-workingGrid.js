const synth = new Tone.Synth();
synth.oscillator.type = "sine";
synth.toMaster();

let sequencer = {
  "sequence": [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ]
}

document.addEventListener("click", (e) => {
  if (e.target.className === "toggle-off" || "toggle-on") {
    console.log(e.target);
    console.log(Array.from(e.target.parentNode.children).indexOf(e.target));
    console.log(Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode));
    
    
    let gridNumberY = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
    let gridNumberX = Array.from(e.target.parentNode.children).indexOf(e.target);

    if (e.target.className === "toggle-off") {
      e.target.className = "toggle-on";
      sequencer.sequence[gridNumberY][gridNumberX] = 1;
    } else if (e.target.className === "toggle-on") {
      e.target.className = "toggle-off";
      sequencer.sequence[gridNumberY][gridNumberX] = 0;
    }
    console.log(sequencer.sequence);


  }
})

const piano = document.getElementById("piano");

piano.addEventListener("mousedown", e => {
  synth.triggerAttack(e.target.dataset.note);
});

piano.addEventListener("mouseup", e => {
  synth.triggerRelease();
});

document.addEventListener("keydown", e => {
  switch (e.key) {
    case "d":
      return synth.triggerAttack("C4");
    case "r":
      return synth.triggerAttack("C#4");
    case "f":
      return synth.triggerAttack("D4");
    case "t":
      return synth.triggerAttack("D#4");
    case "g":
      return synth.triggerAttack("E4");
    case "h":
      return synth.triggerAttack("F4");
    case "u":
      return synth.triggerAttack("F#4");
    case "j":
      return synth.triggerAttack("G4");
    case "i":
      return synth.triggerAttack("G#4");
    case "k":
      return synth.triggerAttack("A4");
    case "o":
      return synth.triggerAttack("A#4");
    case "l":
      return synth.triggerAttack("B4");
    default:
      return;
  }
});

document.addEventListener("keyup", e => {
  switch (e.key) {
    case "d":
    case "r":
    case "f":
    case "t":
    case "g":
    case "h":
    case "u":
    case "j":
    case "i":
    case "k":
    case "o":
    case "l":
       synth.triggerRelease(); 
  }
});




