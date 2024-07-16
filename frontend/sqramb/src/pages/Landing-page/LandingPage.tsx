import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Frame from '../../components/Frame/Frame';
/* import Logo from '../../assets/images/logoImg.png'; */
import Logo from '../../assets/images/logoSqramb.png';
import './landingPage.scss';
import Layout from '../../components/Layout/Layout';

const LandingPage = () => {
  const [loginData, setLoginData] = useState({
    identifier: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiUrl = import.meta.env.VITE_API_URL;
  
    try {
      const response = await fetch(`${apiUrl}/login`, {
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
      const token = data.token;
      const tokenTimestamp = new Date().getTime().toString();
      localStorage.setItem('userId', data.userId);
      
      localStorage.setItem('token', token);
      localStorage.setItem('tokenTimestamp', tokenTimestamp);
  
      window.location.href = '/dashboard';
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Something went wrong');
    }
  };
  
  return (
    <Layout>
    <div className="landingPage-container">
{/* <Frame /> */}
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
      {/* <Frame className="frame-special" /> */}
    </div>
    </Layout>
  );
};

export default LandingPage;
