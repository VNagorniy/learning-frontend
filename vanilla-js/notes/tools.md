## Оглавление

- [Proxy и Reflect](#proxy-и-reflect)
- [Инструменты Accessibility 2.0](#accessibility)

## Proxy и Reflect

**Proxy и Reflect** — это мощные инструменты для отслеживания действий.

1. **Логирование и отладка**

```js
// Представьте, что вам нужно отследить, кто и когда обращается к объекту. Вместо того чтобы забивать код десятками console.log, можно просто использовать Proxy для перехвата. Теперь любое обращение к объекту будет логироваться.

const user = { name: 'Alex', age: 25 };

const loggedUser = new Proxy(user, {
	get(target, prop) {
		console.log(`GET ${prop}`);
		return Reflect.get(target, prop);
	},
	set(target, prop, value) {
		console.log(`SET ${prop} = ${value}`);
		return Reflect.set(target, prop, value);
	}
});

loggedUser.name; // GET name
loggedUser.age = 26; // SET age = 26
```

2. **Валидация данных**

```js
// Proxy может отловить некорректные значения и не дать им попасть в бизнес-логику. С таким подходом можно сделать простые data-models без классов и лишнего кода.

const product = new Proxy(
	{},
	{
		set(target, prop, value) {
			if (prop === 'price' && value < 0) {
				throw new Error('Цена не может быть отрицательной');
			}
			return Reflect.set(target, prop, value);
		}
	}
);
```

3. **Reflect: безопасный доступ**

```js
// Reflect — набор методов для безопасной работы с объектами. Они выполняют стандартные операции, но предотвращают неожиданные ошибки и обеспечивают предсказуемое поведение.

Reflect.get(obj, 'key'); // вместо obj.key
Reflect.set(obj, 'key', 'value'); // возвращает true/false, не выбрасывает ошибки

// Комбо с Proxy выглядит так:
const safe = new Proxy(obj, {
	get: (t, p) => Reflect.get(t, p),
	set: (t, p, v) => Reflect.set(t, p, v)
});
```

<hr>

## Accessibility

• **axe DevTools** — проводит автоматические проверки доступности прямо в браузере.

• **Polypane / Responsively App** — визуализирует интерфейсы с учетом различных состояний, включая цветовую слепоту и контрастность.

• **Figma Contrast & A11y plugins** — проектируй интерфейсы с учетом доступности еще до начала разработки.

• **aria-linter и eslint-plugin-jsx-a11y** — обязательные инструменты для React/Next проектов.
