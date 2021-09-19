import { createApp } from './components/app.js';

const rootNode = {
  id: 'root',
  name: 'Root',
  type: 'ROOT',
  filePath: null,
  parent: null,
  children: [
    {
      id: '1',
      name: '노란고양이',
      type: 'DIRECTORY',
      filePath: null,
      parent: null,
      children: [
        {
          id: '5',
          name: '2021/04',
          type: 'DIRECTORY',
          filePath: null,
          parent: {
            id: '1',
          },
          children: [
            {
              id: '2',
              name: '2021/04/12',
              type: 'DIRECTORY',
              filePath: null,
              parent: {
                id: '5',
              },
              children: [],
            },
          ],
        },
        {
          id: '19',
          name: '물 마시는 사진',
          type: 'FILE',
          filePath: '/images/a2i.jpg',
          parent: {
            id: '1',
          },
        },
      ],
    },
    {
      id: '3',
      name: '까만고양이',
      type: 'DIRECTORY',
      filePath: null,
      parent: null,
      children: [],
    },
    {
      id: '10',
      name: '고등어무늬 고양이',
      type: 'DIRECTORY',
      filePath: null,
      parent: null,
      children: [],
    },
    {
      id: '13',
      name: '삼색이 고양이',
      type: 'DIRECTORY',
      filePath: null,
      parent: null,
      children: [],
    },
    {
      id: '14',
      name: '회색고양이',
      type: 'DIRECTORY',
      filePath: null,
      parent: null,
      children: [],
    },
    {
      id: '20',
      name: '하얀고양이',
      type: 'DIRECTORY',
      filePath: '/images/20201218_002047.jpg',
      parent: null,
      children: [],
    },
  ],
};

export const state = {
  rootNode,
  currentNode: rootNode,
  history: [rootNode],
};

export const actions = {
  addNode(targetNode, data) {
    const node = {
      ...data,
      children: [],
    };
    targetNode.children.push(node);
    render();
  },
  moveTo(node) {
    state.currentNode = node;
    if (state.history.includes(node)) {
      const index = state.history.indexOf(node);
      state.history = state.history.slice(0, index + 1);
    } else {
      state.history.push(node);
    }
    render();
  },
  goBack() {
    state.history.pop();
    const node = state.history.at(-1);
    state.currentNode = node;
    render();
  },
};

const render = () => {
  window.requestAnimationFrame(() => {
    const $root = document.querySelector('#root');
    const $app = createApp({ state, actions });
    $root.innerHTML = '';
    $root.append($app);
  });
};

render();
