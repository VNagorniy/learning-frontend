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
