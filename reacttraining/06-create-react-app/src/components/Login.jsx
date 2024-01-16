import { useState } from 'react';
export function Login() {
  const [data, setData] = useState({ username: '', password: '' });

  function handleFormSubmit(event) {
    event.preventDefault();
    const user = {
      username: event.target.username.value,
      passwrd: event.target.password.value,
    };
    alert(JSON.stringify(user));
    event.target.reset();
  }
  function handleInputChange(event, name) {
    setData({ ...data, [name]: event.target.value });
  }

  function handleFormSubmit2(event) {
    event.preventDefault();
    alert(JSON.stringify(data));
    event.target.reset();
  }

  return (
    <div>
      <>
        <h1>Login form</h1>
        <form onSubmit={handleFormSubmit}>
          <label>
            Username:
            <input className="inp" type="text" name="username" />
          </label>
          <label>
            Password:
            <input className="inp" type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </>
      <>
        <h1>Login form controllable</h1>
        <form onSubmit={handleFormSubmit2}>
          <label>
            Username:
            <input
              onChange={(event) => handleInputChange(event, 'username')}
              className="inp"
              type="text"
              // value={data.username}
            />
          </label>
          <label>
            Password:
            <input
              onChange={(event) => handleInputChange(event, 'password')}
              // value={data.password}
              className="inp"
              type="password"
            />
          </label>
          <button type="submit">Login controllable</button>
        </form>
      </>
    </div>
  );
}
