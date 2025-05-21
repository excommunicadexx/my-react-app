const LoginForm = () => (
  <form id="loginForm">
    <label htmlFor="loginUsername">Имя пользователя:</label>
    <input type="text" id="loginUsername" name="loginUsername" required />

    <label htmlFor="loginPassword">Пароль:</label>
    <input type="password" id="loginPassword" name="loginPassword" required />

    <button className="buttonokno" type="submit">Войти</button>
  </form>
);

export default LoginForm; 