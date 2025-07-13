// Алгоритм Дейкстры для поиска кратчайшего пути
// В отличии от поиска в ширину, где находится кратчайший путь передвигаясь по вершинам графа и не важно длительный путь или нет ГЛАВНОЕ: количество пройденных участков
// Алгоритм Дейкстры учитывает длину ребра(вес)
// Принцип: записывается таблица с начальной вершиной и всеми вершинами, в те точки которые мы можем попасть указываются веса,в других-бесконечность
// 2й этап - вершины помечаем,как рассмотренные, на 3м этапе - уже очениваем как из новых вершин мы можем попасть в следующие.

const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function shortPath(graph, start, end) {
  //Таблица хранения кратчайшего пути
  const costs = {};
  //Массив для добавления узлов, которые проверили
  const processed = [];
  //Массив для хранения соседних вершин рассматриваемого узла
  let neighbors = {};
  // Получаем список ключей(вершин) и итерируемся по ним
  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || 100000000;
    }
  });
  // Поиск вершин в которую можно попасть и самая короткая
  let node = findNodeLowestCost(costs, processed);
  while (node) {
    const cost = costs[node];
    neighbors = graph[node];
    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });
    processed.push(node);
    node = findNodeLowestCost(costs, processed);
  }
  return costs;
}

function findNodeLowestCost(costs, processed) {
  let lowestCost = 100000000;
  let lowestNode;
  Object.keys(costs).forEach((node) => {
    // Получение стоимости текущего узла
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });
  return lowestNode;
}

console.log(shortPath(graph, 'a', 'g'));
