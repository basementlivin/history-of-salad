export function initSalad() {

    const saladContainer = document.querySelector('#salad-container');
    const paths = ["#carrot", "#avocado", "#cucumber", "#arugula", "#asparagus"];
    let currentPath = 0;
  
    function morphToNextPath() {
      const nextPath = (currentPath + 1) % paths.length;
  
      gsap.to(paths[currentPath], {
        duration: 0.33,
        morphSVG: paths[nextPath],
        onComplete: () => {
          currentPath = nextPath;
          setTimeout(morphToNextPath, 0); // Delay before starting the next morph
        }
      });
    }
  
    // Start the morphing animation
    morphToNextPath();


}
  