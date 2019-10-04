/* eslint-disable no-new */
import SmoothParallax from 'smooth-parallax';

// const $ = window.$;

export default function parallax() {
  SmoothParallax.init({
    basePercentageOn: 'pageScroll',
  });

  function castParallax() {
    const bp = window.globalOptions.sizes;

    window.addEventListener('scroll', () => {
      const wW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      const top = window.pageYOffset;
      const layers = document.getElementsByClassName('parallax');
      let layer;
      let speed;
      for (let i = 0; i < layers.length; i += 1) {
        layer = layers[i];
        speed = (wW < bp.sm) ? layer.getAttribute('data-mobile-speed') : layer.getAttribute('data-speed');
        const yPos = -((top * speed) / 100);
        layer.setAttribute('style', `transform: translate3d(0px, ${yPos}px, 0px)`);
      }
    });
  }

  // function dispelParallax() {
  //   $('#nonparallax').css('display', 'block');
  //   $('#parallax').css('display', 'none');
  // }

  function startSite() {
    // const platform = navigator.platform.toLowerCase();
    castParallax();

    // if (platform.indexOf('ipad') !== -1 || platform.indexOf('iphone') !== -1) {
    //   dispelParallax();
    // } else if (platform.indexOf('win32') !== -1 || platform.indexOf('linux') !== -1) {
    //   castParallax();
    // } else {
    //   castParallax();
    // }
  }

  startSite();
}

/* eslint-enable no-new */
