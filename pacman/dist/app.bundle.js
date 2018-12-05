!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.r(e);var s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.position=[185,385],this.direction=[1,-1],this.radius=10,this.rightPressed=!1,this.leftPressed=!1,this.upPressed=!1,this.downPressed=!1,this.spacePressed=!1,this.openedMouth=!0,this.moving=[!0,!0,!0,!0]}var e,i,s;return e=t,(i=[{key:"openMouth",value:function(t){t.beginPath(),t.arc(this.position[0],this.position[1],this.radius,.25*Math.PI,1.25*Math.PI,!1),t.fillStyle="rgb(255, 255, 0)",t.fill(),t.beginPath(),t.arc(this.position[0],this.position[1],this.radius,.75*Math.PI,1.75*Math.PI,!1),t.fill()}},{key:"closeMouth",value:function(t){t.beginPath(),t.fillStyle="rgb(255, 255, 0)",t.arc(this.position[0],this.position[1],this.radius,0,2*Math.PI,!1),t.fill()}},{key:"renderPacman",value:function(t){this.openedMouth?this.openMouth(t):this.closeMouth(t)}},{key:"move",value:function(){this.moving[0]&&this.rightPressed&&this.position[0]<370-this.radius?this.position[0]+=1:this.moving[1]&&this.leftPressed&&this.position[0]>0+this.radius?this.position[0]-=1:this.moving[2]&&this.upPressed&&this.position[1]>0+this.radius?this.position[1]-=1:this.moving[3]&&this.downPressed&&this.position[1]<420-this.radius&&(this.position[1]+=1)}},{key:"collidesWall",value:function(t){this.moving=[!0,!0,!0,!0];for(var e=0;e<t.length;e++)this.position[0]+this.radius===t[e].wallStarts[0]&&this.position[1]>t[e].wallStarts[1]&&this.position[1]<t[e].wallEnds[1]&&(this.moving[0]=!1),this.position[0]-this.radius===t[e].wallStarts[0]&&this.position[1]>t[e].wallStarts[1]&&this.position[1]<t[e].wallEnds[1]&&(this.moving[1]=!1),this.position[1]-this.radius===t[e].wallEnds[1]&&this.position[0]-this.radius>t[e].wallStarts[0]&&this.position[0]-this.radius<t[e].wallEnds[0]&&(this.moving[2]=!1),this.position[1]+this.radius===t[e].wallStarts[1]&&this.position[0]-this.radius>t[e].wallStarts[0]&&this.position[0]-this.radius<t[e].wallEnds[0]&&(this.moving[3]=!1)}}])&&n(e.prototype,i),s&&n(e,s),t}();function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.wallStarts=e,this.wallEnds=i}var e,i,n;return e=t,(i=[{key:"renderWall",value:function(t){t.beginPath(),t.strokeStyle="white",t.moveTo(this.wallStarts[0],this.wallStarts[1]),t.lineTo(this.wallEnds[0],this.wallEnds[1]),t.stroke()}}])&&o(e.prototype,i),n&&o(e,n),t}();function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=document.getElementById("canvas"),this.ctx=canvas.getContext("2d"),this.pacman=new s,this.walls=[];var e=new a([0,2],[370,2]),i=new a([2,0],[2,420]),n=new a([2,418],[368,418]),o=new a([368,0],[368,418]),r=new a([30,35],[80,35]),l=new a([30,70],[80,70]),h=new a([80,35],[80,70]),u=new a([30,35],[30,70]),c=new a([20,120],[200,120]),d=new a([30,120],[150,120]),p=new a([80,50],[80,150]),f=new a([115,50],[115,150]),v=new a([20,120],[200,120]),w=new a([20,120],[200,120]);this.walls.push(e,i,n,o,r,l,h,u,c,d,p,f,v,w),console.log(this.walls)}var e,i,n;return e=t,(i=[{key:"resetCanvas",value:function(){this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}},{key:"listeners",value:function(){var t=this;document.addEventListener("keydown",function(e){39===e.keyCode?t.pacman.rightPressed=!0:37===e.keyCode?t.pacman.leftPressed=!0:38===e.keyCode?t.pacman.upPressed=!0:40===e.keyCode?t.pacman.downPressed=!0:32===e.keyCode&&(t.pacman.pause=!0)}),document.addEventListener("keyup",function(e){39===e.keyCode?t.pacman.rightPressed=!1:37===e.keyCode?t.pacman.leftPressed=!1:38===e.keyCode?t.pacman.upPressed=!1:40===e.keyCode?t.pacman.downPressed=!1:32===e.keyCode&&(t.pacman.pause=!1)})}},{key:"play",value:function(){var t=this;this.listeners();setInterval(function(){this.resetCanvas();for(var t=0;t<this.walls.length;t++)this.walls[t].renderWall(this.ctx);this.pacman.collidesWall(this.walls),this.pacman.renderPacman(this.ctx),this.pacman.move()}.bind(this),5);setInterval(function(){t.pacman.openedMouth=!t.pacman.openedMouth},80)}}])&&r(e.prototype,i),n&&r(e,n),t}())).play(),console.log("hello cruel world")}]);