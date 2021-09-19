import { state, actions } from '../index.js';

export const createReturnItem = (props = {}) => {
  const $template = document.querySelector('template#return-item');
  const $element = $template.content.firstElementChild.cloneNode(true);

  $element.addEventListener('click', (e) => {
    actions.goBack();
  });

  return $element;
};
