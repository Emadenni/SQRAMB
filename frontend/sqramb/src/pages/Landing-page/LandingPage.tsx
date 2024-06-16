import "./landingPage.scss"
import  { useState, useEffect } from 'react';
const LandingPage = () => {
const [message, setMessage] = useState('');

  useEffect(() => {
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

  return (
    <div className='landingPage-container'>
      
    </div>
  );
};

export default LandingPage;