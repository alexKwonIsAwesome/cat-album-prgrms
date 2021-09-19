import { state, actions } from '../index.js';
import { createBreadcrumbs } from './breadcrumbs.js';
import { createList } from './list.js';

export const createApp = (props = {}) => {
  const $template = document.querySelector('template#app');
  const $element = $template.content.firstElementChild.cloneNode(true);

  const $breadcrumbs = createBreadcrumbs({
    history: state.history,
  });
  const $breadcrumbsWrapper = $element.querySelector(
    '[data-flag="breadcrumbs-wrapper"]',
  );
  $breadcrumbsWrapper.append($breadcrumbs);

  const $list = createList({
    items: state.currentNode.children,
    isReturnable: state.currentNode.type !== 'ROOT',
  });
  const $listWrapper = $element.querySelector('[data-flag="list-wrapper"]');
  $listWrapper.append($list);

  return $element;
};
