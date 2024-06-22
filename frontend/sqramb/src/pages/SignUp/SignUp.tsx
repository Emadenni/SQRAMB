import "./signUp.scss";
import Layout from "../../components/Layout/Layout";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import sqramIcon from "../../assets/images/sqramIcon.png";

type Props = {};

const SignUpPage = () => {
  return (
    <>
      <Layout>
        <div className="signUp-container">
          <img src={sqramIcon} alt="sqramIcon" /> 
          <h1><span>Unleash</span> the unscrambling of creativity</h1>
          <h2>Join us today!</h2>
          <RegistrationForm />
        </div>
      </Layout>
    </>
  );
};

export default SignUpPage;
