gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, MorphSVGPlugin, TextPlugin, SplitText, Observer);

import { initScrollSmoother } from "./modules/scroll-smoother";
import { initScrollTrigger } from "./modules/scroll-trigger"; 
import { initSalad } from "./modules/salad";
import { initFadeIns } from "./modules/fade-in";
import { initLogoSlider } from "./modules/logo-slider";

initScrollSmoother();
initScrollTrigger();
initSalad();
initFadeIns();
initLogoSlider();

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  ScrollTrigger.refresh();
});