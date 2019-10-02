/* eslint-disable */
// https://github.com/jlmakes/scrollreveal
import ScrollReveal from 'scrollreveal';

const $ = window.$;

export default function scrollAnimation() {
  // Стандартные настройки
  const sr = ScrollReveal({
    reset: false,
    mobile: true,
    scale: 1,
    delay: 0,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    duration: 700,
    cleanup: true,
  });

  if ($('.js-sr_fade').length) {
    sr.reveal('.js-sr_fade', {
      interval: 100,
      opacity: 0,
    });
  }

  if ($('.js-sr_fade_d100').length) {
    sr.reveal('.js-sr_fade_d100', {
      delay: 100,
      interval: 100,
      opacity: 0,
    });
  }

  if ($('.js-sr_fade_d200').length) {
    sr.reveal('.js-sr_fade_d200', {
      delay: 200,
      interval: 100,
      opacity: 0,
    });
  }

  if ($('.js-sr_fade_d600').length) {
    sr.reveal('.js-sr_fade_d600', {
      delay: 600,
      opacity: 0,
      beforeReveal(el) {
        el.classList.add('is-show');
      },
      afterReveal(el) {
        el.classList.remove('is-show');
      }
    });
  }

  if ($('.js-sr_fade_d800').length) {
    sr.reveal('.js-sr_fade_d800', {
      delay: 800,
      interval: 100,
      opacity: 0,
    });
  }

  if ($('.js-sr_bottom_d700').length) {
    sr.reveal('.js-sr_bottom_d700', {
      delay: 700,
      distance: '30px',
      origin: 'bottom',
    });
  }

  if ($('.js-sr_bottom_d900').length) {
    sr.reveal('.js-sr_bottom_d900', {
      delay: 900,
      interval: 100,
      distance: '30px',
      origin: 'bottom',
    });
  }

  if ($('.js-sr_bottom_d200').length) {
    sr.reveal('.js-sr_bottom_d200', {
      delay: 200,
      interval: 100,
      distance: '30px',
      origin: 'bottom',
    });
  }

  if ($('.js-sr_bottom').length) {
    sr.reveal('.js-sr_bottom', {
      interval: 100,
      distance: '30px',
      origin: 'bottom',
    });
  }

  if ($('.js-sr_left').length) {
    sr.reveal('.js-sr_left', {
      interval: 100,
      distance: '30px',
      origin: 'left',
    });
  }

  if ($('.js-sr_right_d200').length) {
    sr.reveal('.js-sr_right_d200', {
      delay: 200,
      interval: 100,
      distance: '30px',
      origin: 'right',
      beforeReveal(el) {
        el.classList.add('is-show');
      },
      afterReveal(el) {
        el.classList.remove('is-show');
      }
    });
  }

  if ($('.js-sr_right_d500').length) {
    sr.reveal('.js-sr_right_d500', {
      delay: 500,
      interval: 100,
      distance: '30px',
      origin: 'right',
      duration: 1500,
    });
  }

  if ($('.js-sr_right').length) {
    sr.reveal('.js-sr_right', {
      interval: 100,
      distance: '30px',
      origin: 'right',
    });
  }

  if ($('.js-sr_top').length) {
    sr.reveal('.js-sr_top', {
      interval: 100,
      distance: '30px',
      origin: 'top',
    });
  }

  // Показываем элементы, если ScrollReveal не поддерживается
  if (ScrollReveal().noop) {
    $(document).find('.js-sr').removeClass('.js-sr');
  }
}
/* eslint-enable */
