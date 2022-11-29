const open = document.querySelector('.container2');
const close = document.querySelector('.close');
var tl2 = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
open.addEventListener('click', () => {
    if (tl2.reversed()) {
        tl2.play();
    } else {
        tl2
            .set($('canvas'), { css: { zIndex: 450 } })
            .set($('.navbar2'), { css: { zIndex: 400 } })
            .set($('.topLine'), { css: { zIndex: 400 } })
            .set($('.twoLogos'), { css: { zIndex: 400 } })
            .to('.nav-content', { right: 0 })
            .to('.nav-content', { height: '100vh' }, '-=.1')
            .to('.nav-content ul li a', { opacity: 1, pointerEvents: 'all', stagger: .1 }, '-=.5')
            .to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
            .to('.nav-content h2', { opacity: 1 }, '-=1');
    }
});

close.addEventListener('click', () => {
    tl2.reverse();
});