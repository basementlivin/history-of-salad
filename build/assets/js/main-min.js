!function(){"use strict";gsap.registerPlugin(ScrollSmoother,ScrollTrigger,ScrollToPlugin,TextPlugin,SplitText,Observer),ScrollSmoother.create({wrapper:document.querySelector("#smooth-wrapper"),content:document.querySelector("#smooth-content"),smooth:.7,effects:!0}),ScrollTrigger.refresh(),function(){const e=document.querySelectorAll('a[href^="#"]');e.length>0&&e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href"),r=document.querySelector(t);r?gsap.to(window,{duration:1,scrollTo:{y:r.offsetTop,autoKill:!1},ease:"power1.inOut"}):console.error('Target element "'.concat(t,'" not found.'))}))}))}(),document.querySelectorAll(".js-fade-in").forEach((e=>{let t=gsap.timeline({paused:!0}).fromTo(e,.7,{opacity:0,y:30,scale:.88,transformOrigin:"center center"},{opacity:1,y:0,scale:1,ease:"sine.out"});ScrollTrigger.create({trigger:e,start:"top 85%",once:!0,onEnter:e=>t.play(),markers:!1})})),function(){const e=document.querySelector("#text-path"),t=document.querySelector("#curve").getTotalLength(),r=t-1650;let o=null;requestAnimationFrame((function n(a){o||(o=a);const c=r-(a-o)/6e4%1*t*4;e.setAttribute("startOffset",c),requestAnimationFrame(n)}))}(),document.querySelectorAll(".js-jellyswap").forEach((e=>{let t=new SplitText(e,{type:"chars"}).chars;gsap.timeline({onComplete:function(){e.textContent="there's a jelly for that";let t=new SplitText(e,{type:"chars"}).chars;gsap.from(t,{delay:.275,duration:.33,opacity:0,y:20,rotation:-45,scale:.75,stagger:.033,ease:"back.out(1.7)"})}}).to(t,{delay:2.75,duration:.22,opacity:0,y:-20,rotation:20,scale:.5,stagger:.04,ease:"back.in(1.7)"})})),function(){const e=document.querySelector(".js-social"),t=e.querySelectorAll(".instagram"),r=e.querySelectorAll(".email"),o=document.querySelector("#about");e&&o&&ScrollTrigger.create({trigger:"#about",start:"top 65px",onEnter:()=>{t.forEach((e=>e.classList.add("invert"))),r.forEach((e=>e.classList.add("invert")))},onLeaveBack:()=>{t.forEach((e=>e.classList.remove("invert"))),r.forEach((e=>e.classList.remove("invert")))}})}(),document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault();const t=e.target,r=new FormData(t);fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(r).toString()}).then((()=>{const e=document.createElement("div");e.className="alert alert--success",e.textContent="Got it, thanks!",t.appendChild(e)})).catch((e=>{const r=document.createElement("div");r.className="alert alert--failure",r.textContent="Error: ".concat(e),t.appendChild(r)}))})),document.addEventListener("DOMContentLoaded",(e=>{console.log("DOM fully loaded and parsed"),ScrollTrigger.refresh()}))}();