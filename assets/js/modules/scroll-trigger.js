export function initScrollTrigger() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    if (anchors.length > 0) {
        anchors.forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
              e.preventDefault();

              const targetSelector = this.getAttribute('href');
              const target = document.querySelector(targetSelector);
              if (!target) {
                console.error(`Target element "${targetSelector}" not found.`);
                return;
              }

              gsap.to(window, {
                duration: 1,
                scrollTo: {
                  y: target.offsetTop,
                  autoKill: false
                },
                ease: 'power1.inOut'
              });
            });
        });
    }
}