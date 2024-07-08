import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Frame from '../../components/Frame/Frame'; // Assicurati di importare correttamente il componente Frame
import Logo from '../../assets/images/logoImg.png'; // Assicurati di importare correttamente il logo
import './landingPage.scss'; // Assicurati di avere lo stile CSS correttamente configurato

const LandingPage = () => {
  const [loginData, setLoginData] = useState({
    identifier: '',
    password: '',
  });
  const [error, setError] = useState<string>(''); // Specifica manualmente il tipo di error

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Invalid username or password');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token); // Salva il token JWT nel localStorage

      // Esempio di reindirizzamento dopo il login
      window.location.href = '/dashboard'; // Cambia '/dashboard' con la tua pagina di destinazione
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  return (
    <div className="landingPage-container">
      <Frame />
      <aside>
        <img src={Logo} alt="logo" className="logo-image" />
      </aside>
      <main className="landingPage-container__main">
        <h2>Login</h2>
        <form className="loginForm" onSubmit={handleSubmit}>
          <input
            placeholder="Username or email..."
            type="text"
            id="identifier"
            name="identifier"
            value={loginData.identifier}
            onChange={handleChange}
            className="loginForm__input"
            required
          />

          <input
            placeholder="Password..."
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            className="loginForm__input"
            required
          />

          <button type="submit" className="loginForm__button">
            GO
          </button>
        </form>
        {error && <div>{error}</div>}

        <hr />

        <article className="signUpAction">
          <p>or</p>
          <Link to="/signup">
            <p>SIGN UP HERE</p>
          </Link>
        </article>
      </main>
      <Frame className="frame-special" />
    </div>
  );
};

export default LandingPage;
