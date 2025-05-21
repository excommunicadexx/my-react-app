import React from 'react';

const SignUpForm = () => (
  <form id="signupForm">
    <label htmlFor="username">Имя пользователя:</label>
    <input type="text" id="username" name="username" required />

    <label htmlFor="email">Электронная почта:</label>
    <input type="email" id="email" name="email" required />

    <label htmlFor="password">Пароль:</label>
    <input type="password" id="password" name="password" required />

    <button className="buttonokno" type="submit">Зарегистрироваться</button>
  </form>
);

export default SignUpForm; 