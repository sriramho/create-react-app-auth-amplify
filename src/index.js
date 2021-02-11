import Hls from 'hls.js';
let player = document.querySelector('#player');
let button = document.querySelector('#button');

const play = function(){
  console.log('event',button.innerHTML);
  if(button.innerHTML === 'Play'){
      player.play();
      button.innerHTML = "Pause";
  }else{
    
      player.pause();
      button.innerHTML = "Play";
  }
};
console.log(Hls.Events.ERROR);
if(Hls.isSupported()) {
    button.innerHTML = 'Loading';
    var hls = new Hls();
    hls.loadSource('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8');
    hls.attachMedia(player);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      button.innerHTML = 'Playingfromjsfile';
      button.addEventListener('click',play);
  });
  hls.on(Hls.Events.ERROR,function(err){
    console.log(err)
  })
 }else{
   button.innerHTML = 'Not Supported';
 }

//player.play();
