⛔️ Как было раньше

// function LoginForm() {
//   const [state, setState] = useState('');

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const data = new FormData(e.target);
//     try {
//       const res = await fetch('/api/login', { method: 'POST', body: data });
//       setState(res.ok ? 'ok' : 'error');
//     } catch {
//       setState('error');
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="email" type="email" />
//       <button type="submit">Login</button>
//       <p>{state}</p>
//     </form>
//   );
// }

✅ Как стало с useActionState:

// async function login(formData: FormData) {
//   const res = await fetch('/api/login', {
//     method: 'POST',
//     body: formData,
//   });
//   return res.ok ? 'ok' : 'error';
// }

// export default function LoginForm() {
//   const [state, action] = useActionState(login, '');

//   return (
//     <form action={action}>
//       <input name="email" type="email" />
//       <button type="submit">Login</button>
//       <p>{state}</p>
//     </form>
//   );
// }

//Выводы и где применять:

// •  Логика вынесена в отдельную функцию login
// •  Хук сам управляет состоянием
// •  Код стал чище и декларативнее
// •  Авторизация и регистрация
// •  CRUD-операции (создание, обновление, удаление)
// •  Любые формы с асинхронными запросами
