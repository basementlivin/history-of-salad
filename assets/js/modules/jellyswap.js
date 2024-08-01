export function initJellySwap() {
    let swappables = document.querySelectorAll('.js-jellyswap');

    swappables.forEach(elem => {
        let split = new SplitText(elem, { type: "chars" });
        let chars = split.chars;

        gsap.timeline({
            onComplete: function() {
                elem.textContent = "there's a jelly for that";
                let newSplit = new SplitText(elem, { type: "chars" });
                let newChars = newSplit.chars;

                gsap.from(newChars, {
                    delay: 0.275,
                    duration: 0.33,
                    opacity: 0,
                    y: 20,
                    rotation: -45,
                    scale: .75,
                    stagger: 0.033,
                    ease: "back.out(1.7)",
                });
            }
        })
        .to(chars, {
            delay: 2.75,
            duration: 0.22,
            opacity: 0,
            y: -20,
            rotation: 20,
            scale: .5,
            stagger: 0.04,
            ease: "back.in(1.7)",
        });
    });
}