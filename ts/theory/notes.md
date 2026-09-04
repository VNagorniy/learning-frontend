# Содержание

1. [Isolated declarations](#isolated-declarations)
2. [Recursive type limits](#recursive-type-limits)

---

# ⁣Isolated declarations

**флаг isolatedDeclarations.**

В больших monorepo генерация .d.ts может становиться узким местом.

**isolatedDeclarations** заставляет писать код так, чтобы декларации можно было генерировать по файлам независимо. Из-за этого TypeScript чаще требует явные типы.

Это особенно полезно:

👉 большие monorepo  
👉 библиотеки  
👉 project references  
👉 параллельная сборка  
👉 CI, где каждая минута стоит денег

![⁣Isolated declarations](../images/isolatedDeclarations.jpg)

<hr/>

# Recursive type limits

Если тип разворачивается слишком глубоко, компилятор упирается в лимиты.

**Особенно опасны:**

👉 рекурсивные mapped types  
👉 огромные union’ы  
👉 type-level parser’ы  
👉 deeply nested generics  
👉 utility types поверх utility types

![Recursive type limits](../images/recursiveTypeLimits.jpg)

<hr/>
