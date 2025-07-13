// Рекурсивный обход дерева n-размерности
// Деревья - это рекурсивная структура данных, где каждый узел является также деревом, но для данного дерева каждый узел является поддеревом
// Обход каждого узла и подсчёт суммы значения, который хранит каждый из этих узлов

const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
];

//Решение через рекурсию
const recursive = (tree) => {
  let sum = 0;
  tree.forEach((node) => {
    sum += node.v;
    if (!node.c) {
      return node.v;
    }
    sum += recursive(node.c);
  });
  return sum;
};

// Решение итеративным подходом, через LIFO - стэк последний пришёл, первым вышел
const iteration = (tree) => {
  if (!tree.length) {
    return 0;
  }
  let sum = 0;
  let stack = [];
  tree.forEach((node) => stack.push(node));
  while (stack.length) {
    const node = stack.pop();
    sum += node.v;
    if (node.c) {
      node.c.forEach((child) => stack.push(child));
    }
  }
  return sum;
};

console.log(iteration(tree));
console.log(recursive(tree));
