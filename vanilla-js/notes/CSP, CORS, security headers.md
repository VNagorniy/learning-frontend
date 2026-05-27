## Оглавление

1. [CSP](#CSP)
2. [CORS](#CORS)
3. [Security headers](#security-headers)

# CSP

Content Security Policy — это защита от XSS, даже если у вас уже есть уязвимость.

Ссылка на [статью](https://developer.mozilla.org/ru/docs/Web/HTTP/Guides/CSP).
Пример использования В качестве альтернативы настройке сервера, вы можете сконфигурировать CSP с помощью элемента <meta>. Например, так: `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">`

## Пример кода

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://apis.example.com;">
  <title>Пример CSP</title>
</head>
<body>
  <script src="https://apis.example.com/library.js"></script>
  <script>
    // Этот скрипт выполнится, так как он разрешен
    console.log("Скрипт из разрешенного источника работает.");
  </script>
  <script>
    // Этот скрипт нарушит политику CSP, так как он inline
    alert("Inline скрипт заблокирован!");
  </script>
</body>
</html>
```

**Что это даёт:**

👉 запрещает выполнение inline-скриптов  
👉 блокирует загрузку скриптов с чужих доменов  
👉 режет целый класс атак

<hr/>

# CORS

**CORS** по сути это механизм, который говорит кто имеет право читать ответ.

👉 сервер может обработать запрос  
👉 но браузер может не дать прочитать ответ

Именно поэтому:

👉 `Access-Control-Allow-Origin: *` — не «фикс», а потенциальная дыра  
👉 `credentials + wildcard` — запрещённая комбинация

<hr/>

# Security headers

👉 `X-Content-Type-Options: nosniff` Браузер не пытается угадать тип файла. Меньше атак через подмену.

👉 `X-Frame-Options / frame-ancestors` Защита от clickjacking.

👉 `Strict-Transport-Security (HSTS)` Принудительный HTTPS. Без вариантов.

👉 `Referrer-Policy` Контроль того, какие данные уходят при переходах.

**Где фронтендер влияет напрямую:**

👉 какие скрипты подключаются  
👉 есть ли inline JS  
👉 используются ли eval-подобные вещи  
👉 как работают сторонние виджеты  
👉 как обрабатываются пользовательские данные

<hr/>
