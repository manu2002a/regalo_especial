"use strict";

let audio = document.getElementById("audio");

// Usamos el evento 'canplaythrough' para asegurar que el audio puede reproducirse
audio.addEventListener("loadeddata", function() {
    audio.play();
}, false);