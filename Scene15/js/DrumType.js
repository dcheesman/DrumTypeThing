var sound;

var cols = 2;
var rows = 3;

var drums = [
    {
      soundFile: "../sounds/Drum00.wav",
    },
    {
      soundFile: "../sounds/Drum01.wav",
    },
    {
      soundFile: "../sounds/Drum02.wav",
    },
    {
      soundFile: "../sounds/Drum03.wav",
    },
    {
      soundFile: "../sounds/Drum04.wav",
    },
    {
      soundFile: "../sounds/Drum05.wav",
    }
  ];


function preload() {
  for (var i = 0; i < drums.length; i++) {
    drums[i].sound = loadSound( drums[i].soundFile );
  }
}

function setup() {
  createCanvas( windowWidth, windowHeight );

}

function draw() {
  ellipse( width/2 , height/2, 80, 80);
}

function windowResized() {
  resizeCanvas( windowWidth, windowHeight);
}

function mousePressed() {

  playDrum( pixelToID (mouseX, mouseY));

  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}

function playDrum( drumID ) {
  drums[drumID].sound.play();
}

function pixelToID ( x, y ) {

  var id = Math.floor( x / ( width / cols )) + cols * Math.floor( y / (height / rows));

  return id;
}