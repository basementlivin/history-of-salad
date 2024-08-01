export function initMarquee() {
    const textPath = document.querySelector("#text-path");
    const path = document.querySelector("#curve");

    // Calculate the length of the path
    const pathLength = path.getTotalLength();

    // Estimate the length of the text or set a fixed value
    // This value should be adjusted based on the actual length of your text
    const textLengthEstimate = 1650; // Adjust this based on your text

    // Adjust initial startOffset to ensure the path starts full
    // Now includes an estimate of the text length to fill the path from the start
    const initialOffset = pathLength - textLengthEstimate;

    let startTime = null;
    const duration = 60000; // Duration of one complete animation loop in milliseconds
    const speedMultiplier = 4; // Adjust this value to control the speed of the animation

    function animateTextPath(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }

        const elapsed = timestamp - startTime;
        const progress = (elapsed / duration) % 1; // Calculate progress within the animation loop (0 to 1)

        // Calculate offset based on progress, path length, and speed multiplier
        // Adjusted to start with the text filling the path
        const offset = initialOffset - progress * pathLength * speedMultiplier;

        // Set the startOffset attribute with the adjusted offset
        textPath.setAttribute("startOffset", offset);

        requestAnimationFrame(animateTextPath);
    }

    // Start the animation loop
    requestAnimationFrame(animateTextPath);
}