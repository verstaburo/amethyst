/* eslint-disable no-restricted-syntax */
import ResizeObserver from 'resize-observer-polyfill';

const $ = window.$;

export default function navigation() {
  window.pageSections = {};

  function setActiveSection(name) {
    const links = $('[data-nav-link]');
    const navContainer = $('[data-nav-container]');
    const titles = $('[data-nav-title]');
    const activeLink = $(`[data-nav-link=${name}]`);
    const activeTitle = $(`[data-nav-title=${name}]`);
    const navClassA = $(activeLink).attr('data-nav-add-class');
    const navClassR = $(activeLink).attr('data-nav-remove-class');
    $(links).not(activeLink).removeClass('is-active is-animate');
    $(activeLink).addClass('is-active');
    $(titles).not(activeTitle).removeClass('is-active is-animate');
    $(activeTitle).addClass('is-active');
    $(navContainer).addClass(navClassA).removeClass(navClassR);
    setTimeout(() => {
      $(activeLink).addClass('is-animate');
      $(activeTitle).addClass('is-animate');
    }, 50);
  }

  function updateSectionParam(el) {
    const name = el.getAttribute('id');
    const top = $(el).offset().top;
    const height = $(el).outerHeight(true);
    const bottom = top + height;
    window.pageSections[name] = {
      top,
      bottom,
    };
  }

  function setSectionsSizes() {
    const targets = document.querySelectorAll('[data-section]');
    const tarLen = targets.length;

    if (tarLen) {
      for (let i = 0; i < tarLen; i += 1) {
        updateSectionParam(targets[i]);
      }
    }
  }

  function findActiveSection(scrollTop) {
    const sections = window.pageSections;
    const names = Object.keys(sections);
    const nmL = names.length;
    let result;
    for (let i = 0; i < nmL; i += 1) {
      const section = sections[names[i]];
      const tS = section.top;
      const bS = section.bottom;
      if (tS <= scrollTop && bS > scrollTop) {
        result = names[i];
      }
    }

    return result;
  }

  function preSetSection() {
    const sT = $(window).scrollTop() + ($(window).height() / 2);
    const activeSectionName = findActiveSection(sT);
    setActiveSection(activeSectionName);
  }

  function setObserversForSections() {
    const targets = document.querySelectorAll('[data-section]');
    const tarLen = targets.length;

    if (tarLen) {
      for (let i = 0; i < tarLen; i += 1) {
        const sectionsSizesWatch = new ResizeObserver(() => {
          setSectionsSizes();
          preSetSection();
        });

        sectionsSizesWatch.observe(targets[i]);
      }
    }
  }

  setSectionsSizes();
  setObserversForSections();

  window.sectionsInit = () => {
    setSectionsSizes();
    setObserversForSections();
  };

  preSetSection();

  $(window).on('resize', preSetSection);

  $(window).on('scroll', () => {
    const sT = $(window).scrollTop() + ($(window).height() / 2);
    const activeSectionName = findActiveSection(sT);
    setActiveSection(activeSectionName);
  });
}
/* eslint-enable no-restricted-syntax */
