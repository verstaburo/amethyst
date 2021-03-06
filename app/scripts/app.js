/* eslint-disable */
import find from 'array.prototype.find';
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import './globalOptions';
import './vhfix';
import browsersDetection from './browser';
import anchor from '../blocks/js-functions/anchor';
import scrollAnimation from '../blocks/js-functions/scroll-animation';
// import { selects, sliders, datepicker, inputmask, numberinput } from '../blocks/form/form';
import popups from '../blocks/popups/popups';
// import scrollbar from '../blocks/scrollbar/scrollbar';
// import {slider} from '../blocks/slider/slider';
// import tooltips from '../blocks/tooltip/tooltip';
// import tabs from '../blocks/tabs/tabs';
// import maps from '../blocks/map/map';
// import accordion from '../blocks/accordion/accordion';
// import '../blocks/rating/rating';
// import '../blocks/dropdown/dropdown';
import putBlockIntoSlot from '../blocks/js-functions/put-block-into-slot';
import parallax from '../components/lead/lead';
import navigation from '../components/navigation/navigation';
import hideScrolldown from '../blocks/scrolldown/scrolldown';

const $ = window.$;

$(() => {
  find.shim();
  browsersDetection();
  svg4everybody();
  objectFitImages();
  anchor();
  // selects();
  // sliders();
  popups();
  // scrollbar();
  // slider();
  // tooltips();
  // tabs();
  // datepicker();
  // inputmask();
  // numberinput();
  // maps();
  scrollAnimation();
  // accordion();
  putBlockIntoSlot();
  parallax();
  navigation();
  hideScrolldown();
});
/* eslint-enable */
