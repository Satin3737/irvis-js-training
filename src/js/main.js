import './slider.js';
import isWebP from './modules/helper.js';
import modals from "./modules/modals.js";
import tabs from "./modules/tabs.js";
import forms from "./modules/forms.js";
import changeModalState from "./modules/changeModalState.js";
import timer from "./modules/timer.js";
import gallery from "./modules/gallery.js";

window.addEventListener('DOMContentLoaded', () => {
   
   let modalState = {};
   let deadline = '2023-06-01';
   
   
   isWebP();
   changeModalState(modalState);
   modals();
   timer('.container1', deadline);
   tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
   tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
   tabs('.balcon_icons', '.balcon_icons_btn', '.big_img img', 'do_image_more', 'inline-block');
   forms(modalState);
   gallery();
});