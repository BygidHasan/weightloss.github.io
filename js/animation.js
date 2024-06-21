document.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!

  // const locoScroll = new LocomotiveScroll({
  //   el: document.querySelector('.smooth-scroll'),
  //   smooth: true,
  // });
  // locoScroll.on('scroll', ScrollTrigger.update);

  const tl = gsap.timeline();
  tl.from('.navbar-brand', { yPercent: -200, duration: 1 })
    .from(
      '.nav-item',
      {
        yPercent: -200,
        duration: 1,
        stagger: 0.1,
      },
      '<+=0.1'
    )
    .from('.title-up', { x: -300, duration: 1 }, '<')
    .from('.title-down', { x: 300, duration: 1 }, '<')
    .from('.banner-text', { x: -150, opacity: 0.3, duration: 1 }, '<')
    .from(
      '.scroll-to-exp',
      { y: 50, opacity: 0.3, stagger: 0.1, duration: 1 },
      '<'
    )
    .from('.banner-1', { y: 500, rotation: -35, scale: 0.85, duration: 1 }, '<')
    .from(
      '.banner-2',
      { y: 700, x: 250, rotation: -35, scale: 1.55, duration: 1 },
      '<+=0.1'
    );

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.banner-captions',
      start: 'center 200px',
      end: '900% top',
      scrub: 1,
      markers: true,
    },
  });

  tl2
    .to('.title-up', {
      x: -200,
    })
    .to(
      '.banner-btn',
      {
        scale: 0.7,
        transformOrigin: 'top left',
      },
      '<'
    )
    .to(
      '.fa-arrow-right',
      {
        opacity: 0,
        duration: 0.01,
      },
      '<'
    )
    .to(
      '.banner-1',
      {
        x: 400,
        y: 1320,
        scale: 0.95,
      },
      '<'
    )
    .to(
      '.banner-2',
      {
        y: 1320,
      },
      '<'
    )
    .to('.banner-1', {
      rotation: 35,
      scale: 1.25,
    })
    .to(
      '.boo-lists',
      {
        y: -100,
        duration: 0.3,
      },
      '<'
    )
    .from('.mobileimg', {
      y: -1200,
      x: 900,
      scale: 0.7,
      rotation: 15,
      opacity: 0.5,
      duration: 0.2,
    })
    .from(
      '.lists-mobile',
      {
        y: 100,
      },
      '<'
    )
    .from(
      '.storeIcon',
      {
        y: 100,
        stagger: 0.03,
      },
      '<'
    );
});
