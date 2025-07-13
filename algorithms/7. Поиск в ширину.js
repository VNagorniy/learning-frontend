// Поиск кратчайшего пути от точки к точке, работает по принципу FIFO первый зашёл - первый вышел

const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);
  while (queue.length > 0) {
    const current = queue.shift();
    if (!graph[current]) {
      //Из вершины нет пути
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    } else {
      // Добавление в очередь новых вершин
      queue = [...queue, ...graph[current]];
    }
  }
  return false;
}

console.log(breadthSearch(graph, 'a', 'g'));
