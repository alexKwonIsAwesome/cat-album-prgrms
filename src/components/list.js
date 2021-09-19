import { createItem } from './item.js';
import { createReturnItem } from './return-item.js';

export const createList = ({ items, isReturnable } = {}) => {
  const $template = document.querySelector('template#list');
  const $element = $template.content.firstElementChild.cloneNode(true);

  const $itemsWrapper = $element;
  const $itemsFragment = new DocumentFragment();
  items.forEach((item) => {
    const $item = createItem({ item });
    $itemsFragment.append($item);
  });

  if (isReturnable) {
    const $returnItem = createReturnItem();
    $itemsFragment.prepend($returnItem);
  }

  $itemsWrapper.append($itemsFragment);
  return $element;
};
