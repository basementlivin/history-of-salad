export function initSaladMorph() {
    const saladContainer = document.querySelector('#salad-container');
    const paths = ["#arugula", "#avocado", "#cucumber", "#spinach", "#carrot", "#onion", "#asparagus"];
    let currentPath = 0;

    function morphToNextPath() {
        const nextPath = (currentPath + 1) % paths.length;

        // Hide all paths except the current one
        paths.forEach((path, index) => {
            gsap.set(path, { visibility: index === currentPath ? "visible" : "hidden" });
        });

        gsap.to(paths[currentPath], {
            duration: 0.33,
            morphSVG: paths[nextPath],
            onComplete: () => {
                currentPath = nextPath;
                setTimeout(morphToNextPath, 1750); // Delay before starting the next morph
            }
        });
    }

    // Start the morphing animation
    morphToNextPath();
}
  