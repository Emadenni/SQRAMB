import "./landingPage.scss";
import { Link } from "react-router-dom";
/* import { useState, useEffect } from "react"; */
import Frame from "../../components/Frame/Frame";
import Logo from "../../assets/images/logoImg.png";
const LandingPage = () => {
  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/');
        const data = await response.text(); // or response.json() if your endpoint returns JSON
        setMessage(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 */
  return (
    <div className="landingPage-container">
      <Frame />
      <aside>
        <img src={Logo} alt="logo" className="logo-image" />
      </aside>
      <main className="landingPage-container__main">
        <h2>Login</h2>
        <form className="loginForm" /* onSubmit ={handleSubmit} */>
          <input
            placeholder="Username..."
            type="text"
            id="username"
            name="username"
            /* value={loginData.username} */
            /* onChange={handleChange} */
            className="loginForm__input"
            required
          />

          <input
            placeholder="Password..."
            type="password"
            id="password"
            name="password"
            /* value={loginData.password}
                onChange={handleChange} */
            className="loginForm__input"
            required
          />


          <button type="submit" className="loginForm__button">
            GO
          </button>
        </form>
<hr />

<article className="signUpAction">
  <p>or</p>
  <Link to="/signup">
  <p>SIGN IN HERE</p>
  </Link>
</article>

      </main>
      <Frame className="frame-special" />
    </div>
  );
};

export default LandingPage;
