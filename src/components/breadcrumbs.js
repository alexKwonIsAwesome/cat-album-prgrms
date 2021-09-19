import { state, actions } from '../index.js';

export const createBreadcrumbs = ({ history } = {}) => {
  const $template = document.querySelector('template#breadcrumbs');
  const $element = $template.content.firstElementChild.cloneNode(true);

  const $breadcrumbsFragment = new DocumentFragment();
  history.forEach((item) => {
    const $item = document.createElement('span');
    $item.setAttribute('class', 'underline cursor-pointer');
    $item.append(item.name);

    $item.addEventListener('click', () => {
      console.log(item);
      actions.moveTo(item);
    });

    $breadcrumbsFragment.append($item);
    $breadcrumbsFragment.append(' / ');
  });

  $element.append($breadcrumbsFragment);

  return $element;
};
