// useOptimistic — мгновенные обновления UI без лишнего кода

// ⛔️ Было
// const [todos, setTodos] = useState(initialTodos);

// function addTodo(newTodo) {
//   const optimistic = [...todos, newTodo];
//   setTodos(optimistic);

//   saveTodo(newTodo).catch(() => {
//     setTodos(todos); // откат, если ошибка
//   });
// }

// ✅ Стало

// const [optimisticTodos, addOptimisticTodo] = useOptimistic(
//   todos,
//   (state, newTodo) => [...state, newTodo]
// );

// function addTodo(newTodo) {
//   addOptimisticTodo(newTodo);
//   saveTodo(newTodo);
// }
