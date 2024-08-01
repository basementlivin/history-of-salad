export function initSocial() {
    const social = document.querySelector('.js-social');
    const instagram = social.querySelectorAll('.instagram');
    const email = social.querySelectorAll('.email');
    const about = document.querySelector('#about');

    if (social && about) {
        ScrollTrigger.create({
            trigger: "#about",
            start: "top 65px",
            onEnter: () => {
                instagram.forEach(el => el.classList.add('invert'));
                email.forEach(el => el.classList.add('invert'));
            },
            onLeaveBack: () => {
                instagram.forEach(el => el.classList.remove('invert'));
                email.forEach(el => el.classList.remove('invert'));
            }
        });
    }
}