"use strict";(self.webpackChunkblog_demo_aurora=self.webpackChunkblog_demo_aurora||[]).push([[5303],{5303:(e,t,o)=>{function n(){document.getElementById("home-wave-canvas1").width=window.innerWidth,document.getElementById("home-wave-canvas2").width=window.innerWidth,function(){let e=0,t=-1e3,o=document.getElementById("home-wave-canvas1"),n=o.getContext("2d");!function i(){e-=5,-1*e==550&&(e=0),n.clearRect(0,0,o.width,o.height),n.fillStyle="rgba(255,255,255,.524)",n.beginPath(),n.moveTo(t-e,45);for(let o=0;o<6;o++){let i=550*o+t-e;n.quadraticCurveTo(i+137.5,60,i+275,45),n.quadraticCurveTo(i+137.5+275,30,i+550,45)}n.lineTo(2300,3e3),n.lineTo(t,3e3),n.fill(),setTimeout(i,25)}()}(),function(){let e=0,t=-1e3,o=412.5,n=o/2,i=document.getElementById("home-wave-canvas2"),a=i.getContext("2d");!function l(){e-=5,-1*e==825&&(e=0),a.clearRect(0,0,i.width,i.height),a.fillStyle="rgba(255,255,255,.745)",a.beginPath();a.moveTo(t-e,105);for(let i=0;i<4;i++){let l=825*i+t-e;a.quadraticCurveTo(l+n,135,l+o,105),a.quadraticCurveTo(l+n+o,75,l+825,105)}a.lineTo(2300,3e3),a.lineTo(t,3e3),a.fill(),setTimeout(l,5e3/60)}()}()}o.r(t),o.d(t,{wave:()=>n})}}]);