const $ = window.$;

export default function hideScrolldown() {
  $(window).on('scroll', () => {
    const sT = $(window).scrollTop();
    const hiddenEl = $('[data-scrolldown-hide]');

    if (sT > 1) {
      $(hiddenEl).addClass('is-hide');
    } else {
      $(hiddenEl).removeClass('is-hide');
    }
  });
}
