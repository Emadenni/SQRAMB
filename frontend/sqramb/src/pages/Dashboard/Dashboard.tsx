import Layout from "../../components/Layout/Layout";
import "./dashboard.scss";
import beeIcon from "../../assets/images/beeIcon.png"
import Search from "../../components/Search/Search";
import Navigation from "../../components/Navigation/Navigation";

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <div className="dashboard-container">
          <header className="dashboard-container__header">
            <aside>
              <div>
              <img src={beeIcon} className="bee-img" alt="beeSqramb" />
              <h3>Unscrambling of creativity</h3>
              </div>
              <Search />
              <Navigation />
            </aside>
            <section></section>
          </header>
          <section className="dashboard-container__section">
            <article className="info-user"></article>
            <article className="song-of-the-day"></article>
            <article className="cit-of-the-day"></article>
          </section>
          <main className="dashboard-container__main"></main>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
