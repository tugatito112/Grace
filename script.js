onload = () => {
  document.body.classList.remove("container");
};

document.getElementById("play-button").addEventListener("click", function()   
{
    var audio = document.getElementById("myAudio");
    audio.play();
});
