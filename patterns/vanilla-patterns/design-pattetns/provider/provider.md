## Оглавление

- [Provider паттерн](#provider-паттерн)
  - [Пример использования](#пример-использования)
  - [Пример 2](#пример-2)
- [Хуки](#хуки)
- [Примеры библиотек](#примеры-библиотек)
- [Плюсы](#плюсы)
- [Минусы](#минусы)

# Provider паттерн

Часто мы сталкиваемся с так называемым «сверлением» (prop drilling ), когда мы передаем props далеко вниз по дереву компонентов.

**Шаблон «Провайдер»** позволяет предоставить данные нескольким компонентам.

**Шаблон «Провайдер»** очень полезен для обмена глобальными данными. Распространенный вариант его использования — совместное использование состояния пользовательского интерфейса темы со многими компонентами.

**Провайдер** — это компонент более высокого порядка, предоставляемый нам объектом **Context**. Мы можем **создать объект Context**, используя _createContext_ метод, предоставляемый React.

## Пример использования

Провайдер получает **value** свойство, содержащее данные, которые мы хотим передать. Все компоненты, обёрнутые в этот поставщик, имеют доступ к значению этого **value** свойства.

```jsx
const DataContext = React.createContext()

function App() {
  const data = { ... }

  return (
    <div>
      <DataContext.Provider value={data}>
        <SideBar />
        <Content />
      </DataContext.Provider>
    </div>
  )
}
```

Нам больше не нужно вручную передавать **data** свойство каждому компоненту!

Каждый компонент может получить доступ к объекту **data**, используя **useContext** хук.

Этот хук _получает контекст_ **data** на который ссылается **DataContext** объект. **useContext** хук позволяет читать и записывать данные в объект контекста.

```jsx
const DataContext = React.createContext();

function App() {
  const data = { ... }

  return (
    <div>
      <SideBar />
      <Content />
    </div>
  )
}

const SideBar = () => <List />
const List = () => <ListItem />
const Content = () => <div><Header /><Block /></div>


function ListItem() {
  const { data } = React.useContext(DataContext);
  return <span>{data.listItem}</span>;
}

function Text() {
  const { data } = React.useContext(DataContext);
  return <h1>{data.text}</h1>;
}

function Header() {
  const { data } = React.useContext(DataContext);
  return <div>{data.title}</div>;
}
```

Компоненты, не использующие это **data** значение, вообще не будут иметь с ним дело **data**.

### Пример 2

Мы хотим, чтобы пользователь мог переключаться между светлым и тёмным режимами, переключая переключатель.

Вместо того, чтобы передавать значение текущей темы каждому компоненту, мы можем обернуть компоненты в ThemeProvider, и передать цвета текущей темы поставщику.

```jsx
export const ThemeContext = React.createContext();

const themes = {
	light: {
		background: '#fff',
		color: '#000'
	},
	dark: {
		background: '#171717',
		color: '#fff'
	}
};

export default function App() {
	const [theme, setTheme] = useState('dark');

	function toggleTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	const providerValue = {
		theme: themes[theme],
		toggleTheme
	};

	return (
		<div className={`App theme-${theme}`}>
			<ThemeContext.Provider value={providerValue}>
				<Toggle />
				<List />
			</ThemeContext.Provider>
		</div>
	);
}
```

Поскольку компоненты **Toggle** и **List** заключены в **ThemeContext** поставщике, у нас есть доступ к значениям **theme\* и, **toggleTheme** которые передаются **value\*\* поставщику как.

Внутри **Toggle** компонента мы можем использовать **toggleTheme** функцию для соответствующего обновления темы.

```jsx
import React, { useContext } from 'react';
import { ThemeContext } from './App';

export default function Toggle() {
	const theme = useContext(ThemeContext);

	return (
		<label className="switch">
			<input type="checkbox" onClick={theme.toggleTheme} />
			<span className="slider round" />
		</label>
	);
}
```

Сам компонент **List** не заботится о текущем значении темы. Однако компоненты **ListItem** заботятся! Мы можем использовать **theme** контекст непосредственно внутри **ListItem**.

```jsx
import React, { useContext } from 'react';
import { ThemeContext } from './App';

export default function TextBox() {
	const theme = useContext(ThemeContext);

	return <li style={theme.theme}>...</li>;
}
```

[Пример реализации](https://codesandbox.io/embed/quirky-sun-9djpl).

## Хуки

Мы можем создать хук для предоставления контекста компонентам. Вместо того, чтобы импортировать **useContext** контекст в каждом компоненте, мы можем использовать хук, возвращающий нужный нам контекст.

Добавлю ошибку, если **useContext(ThemeContext)** возвращает ложное значение.

```jsx
function useThemeContext() {
	const theme = useContext(ThemeContext);
	if (!theme) {
		throw new Error('useThemeContext must be used within ThemeProvider');
	}
	return theme;
}
```

Вместо того, чтобы напрямую обёртывать компоненты в _ThemeContext.Provider_ компонент, мы можем **создать HOC**, который обёртывает компонент для предоставления его значений.

Таким образом, мы можем отделить логику контекста от компонентов рендеринга, что повышает возможность повторного использования поставщика.

```jsx
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function App() {
  return (
    <div className={`App theme-${theme}`}>
      <ThemeProvider>
        <Toggle />
        <List />
      </ThemeProvider>
    </div>
  );
}

// Каждый компонент, которому необходим доступ к ThemeContext, теперь может просто использовать useThemeContext хук.

export default function TextBox() {
  const theme = useThemeContext();

  return <li style={theme.theme}>...</li>;
}
```

## Примеры библиотек

Некоторые библиотеки предоставляют встроенные поставщики, значения которых можно использовать в компонентах-потребителях. Хороший пример — **styled-components**.

Библиотека styled-components предоставляет **ThemeProvider**. Каждый стилизованный компонент будет иметь доступ к значению этого поставщика! Вместо того, чтобы создавать API контекста самостоятельно, мы можем использовать предоставленный нам!

[Пример реализации](https://codesandbox.io/embed/divine-platform-gbuls).

## Плюсы

API-интерфейс «Шаблон поставщика»/«Контекст» позволяет передавать данные многим компонентам без необходимости вручную передавать их через каждый уровень компонентов.

Поддержание некоторого вида глобального состояния упрощается благодаря шаблону Provider, поскольку мы можем предоставить компонентам доступ к этому глобальному состоянию.

## Минусы

В некоторых случаях чрезмерное использование шаблона «Провайдер» может привести к проблемам с производительностью. Все компоненты, использующие контекст, **перерисовываются** при каждом изменении состояния.

<hr>
