let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    const music = document.getElementById("bg-music");
    music.volume = 0.5;
    music.play();
    musicStarted = true;
  }
}

function changeItem(layerId, filename) {
  const layer = document.getElementById(layerId);
  layer.src = `assets/${filename}`;
}

function removeItem(layerId) {
  const layer = document.getElementById(layerId);
  layer.src = "";
}

