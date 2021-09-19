import { state, actions } from '../index.js';

export const createItem = ({ item } = {}) => {
  const $template = document.querySelector('template#item');
  const $element = $template.content.firstElementChild.cloneNode(true);

  const $image = $element.querySelector('[data-flag="image"]');
  let src;
  if (item.type === 'DIRECTORY') src = './assets/directory.svg';
  if (item.type === 'FILE') src = './assets/file.svg';
  $image.setAttribute('src', src);

  const $name = $element.querySelector('[data-flag="name"]');
  $name.append(item.name);

  $element.addEventListener('click', (e) => {
    if (item.type === 'DIRECTORY') {
      actions.moveTo(item);
      return;
    }
  });

  return $element;
};
