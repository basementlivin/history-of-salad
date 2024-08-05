export function initSaladMorph() {
    const paths = ["#onion", "#avocado", "#cucumber", "#spinach", "#carrot", "#arugula", "#asparagus"];
    let currentPath = 0;

    function morphToNextPath() {
        const nextPath = (currentPath + 1) % paths.length;

        gsap.to(paths[currentPath], {
            duration: 0.33,
            morphSVG: paths[nextPath],
            onComplete: () => {
                // Hide the current path and show the next path
                gsap.set(paths[currentPath], { visibility: "hidden" });
                gsap.set(paths[nextPath], { visibility: "visible" });

                currentPath = nextPath;
                setTimeout(morphToNextPath, 1250); // Delay before starting the next morph
            }
        });
    }

    // Start the morphing animation
    morphToNextPath();
}