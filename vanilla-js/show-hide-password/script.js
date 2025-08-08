//Реализация кнопки "Показать/Скрыть пароль"

//Создайте поле ввода пароля с кнопкой, которая позволяет переключать видимость введённого текста. Это улучшает UX, давая пользователю возможность убедиться, что он ввёл пароль правильно.

//Ожидаемое поведение:

//• При нажатии на кнопку "Показать" пароль отображается.
//• При повторном нажатии кнопка меняется на "Скрыть", а пароль снова становится скрытым.

 const passwordInput = document.getElementById('password');
  const toggleButton = document.getElementById('toggle-password');

  toggleButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleButton.textContent = 'Скрыть';
    } else {
      passwordInput.type = 'password';
      toggleButton.textContent = 'Показать';
    }
  });