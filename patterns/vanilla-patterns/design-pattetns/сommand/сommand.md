## Оглавление

- [Command паттерн](#command-паттерн)
  - [Пример использования](#пример-использования)
- [Плюсы](#плюсы)
- [Минусы](#минусы)

# Command паттерн

**Шаблон «Команда»** может _отделить объекты_, выполняющие **определенную** задачу, _от объекта_, **вызывающего** метод.

## Пример использования

Допустим, у нас есть онлайн-платформа доставки еды. Пользователи могут размещать, отслеживать и отменять заказы.

```js
class OrderManager() {
  constructor() {
    this.orders = []
  }

  placeOrder(order, id) {
    this.orders.push(id)
    return `You have successfully ordered ${order} (${id})`;
  }

  trackOrder(id) {
    return `Your order ${id} will arrive in 20 minutes.`
  }

  cancelOrder(id) {
    this.orders = this.orders.filter(order => order.id !== id)
    return `You have canceled your order ${id}`
  }
}
```

В **OrderManager** классе у нас есть доступ к методам _placeOrder_, _trackOrder_ и _cancelOrder_. Использование этих методов напрямую в JavaScript было бы абсолютно корректным!

```js
const manager = new OrderManager();

manager.placeOrder('Pad Thai', '1234');
manager.trackOrder('1234');
manager.cancelOrder('1234');
```

Однако вызов методов непосредственно в **manager** экземпляре имеет свои недостатки.

> Может случиться, что мы решим переименовать некоторые методы позже, или изменится их функциональность.

Допустим, вместо того, чтобы называть его **placeOrder**, мы теперь переименовываем его в **addOrder**!

Это означало бы, что нам пришлось бы убедиться, что мы не вызываем этот _placeOrder_ метод нигде в нашей кодовой базе, что может быть очень сложно в больших приложениях. _Вместо этого мы хотим отделить методы от **manager** объекта и создать отдельные командные функции для каждой команды!_

Вместо методов _placeOrder_, _cancelOrder_ и _trackOrder_, у него будет один метод: **execute**. **Этот метод выполнит любую переданную ему команду**.

```js
class OrderManager {
	constructor() {
		this.orders = [];
	}

	execute(command, ...args) {
		return command.execute(this.orders, ...args);
	}
}
```

Создам 3 command для manager

```js
class Command {
	constructor(execute) {
		this.execute = execute;
	}
}

function PlaceOrderCommand(order, id) {
	return new Command((orders) => {
		orders.push(id);
		return `You have successfully ordered ${order} (${id})`;
	});
}

function CancelOrderCommand(id) {
	return new Command((orders) => {
		orders = orders.filter((order) => order.id !== id);
		return `You have canceled your order ${id}`;
	});
}

function TrackOrderCommand(id) {
	return new Command(() => `Your order ${id} will arrive in 20 minutes.`);
}

const manager = new OrderManager();
```

Вместо того, чтобы напрямую привязывать методы к **OrderManager** экземпляру, теперь _они представляют собой отдельные, несвязанные функции_, которые мы можем вызывать через **execute** метод, доступный в OrderManager.

[Пример реализации](https://codesandbox.io/embed/serene-sea-41ixg).

## Плюсы

**Шаблон «Команда»** позволяет отделить методы от объекта, выполняющего операцию. Он даёт больше контроля, если вы работаете с командами, имеющими определённый срок действия, или командами, которые должны быть поставлены в очередь и выполнены в определённое время.

## Минусы

Варианты использования шаблона команды довольно ограничены и часто добавляют в приложение ненужный шаблонный код.

<hr>
