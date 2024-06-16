import "./App.scss"
import  { useState, useEffect } from 'react';
import Frame from "./components/Frame/Frame";


const App = () => {
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
    <div>
      <Frame />
      <h1>Message from Backend:</h1>
      <p>{message}</p>
    </div>
  );
};

export default App;
