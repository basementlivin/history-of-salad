gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, TextPlugin, SplitText, Observer);

import { initScrollSmoother } from "./modules/scroll-smoother";
import { initScrollTrigger } from "./modules/scroll-trigger"; 
import { initFadeIns } from "./modules/fade-in";
// import { initMarquee } from "./modules/marquee";
// import { initJellySwap } from "./modules/jellyswap";
// import { initSocial } from "./modules/social";
// import { initFormHandler } from "./modules/form-handler";

initScrollSmoother();
initScrollTrigger();
initFadeIns();
// initMarquee();
// initJellySwap();
// initSocial();
// initFormHandler();

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  ScrollTrigger.refresh();
});