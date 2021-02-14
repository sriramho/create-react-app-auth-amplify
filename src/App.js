import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hls from 'hls.js';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);



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
    hls.loadSource('https://d27k1ozkf91br.cloudfront.net/5c6c476e-46df-4c46-ba35-09010f82aa03/hls/file_example_MOV_1280_1_4MB.m3u8');
    hls.attachMedia(player);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      button.innerHTML = 'Start Stream';
      button.addEventListener('click',play);
  });
  hls.on(Hls.Events.ERROR,function(err){
    console.log(err)
  })
 }else{
   button.innerHTML = 'Not Supported';
 }

//player.play();

export default withAuthenticator(App, true);
