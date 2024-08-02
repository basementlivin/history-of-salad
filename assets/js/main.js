gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, TextPlugin, SplitText, Observer);

import { initScrollSmoother } from "./modules/scroll-smoother";
import { initScrollTrigger } from "./modules/scroll-trigger"; 
import { initFadeIns } from "./modules/fade-in";
import { initLogoSlider } from "./modules/logo-slider";
// import { initSocial } from "./modules/social";
// import { initFormHandler } from "./modules/form-handler";

initScrollSmoother();
initScrollTrigger();
initFadeIns();
initLogoSlider();
// initSocial();
// initFormHandler();

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  ScrollTrigger.refresh();
});