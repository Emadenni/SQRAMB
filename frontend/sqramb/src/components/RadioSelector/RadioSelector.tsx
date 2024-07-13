import React, { useState, useEffect } from 'react';
import "./radioSelector.scss";
/* import audio from "../../assets/images/audio.png" */

interface Station {
  url: string;
  name: string;
}

const RadioSelector = () => {
  const [stations, setStations] = useState<Station[]>([]);
  const [currentStation, setCurrentStation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await fetch('https://at1.api.radio-browser.info/json/stations/topvote/100');
        const data: Station[] = await response.json();
        setStations(data);
        if (data.length > 0) {
          setCurrentStation(data[0].url);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching radio stations:', error);
        setIsLoading(false);
      }
    };

    fetchStations();
  }, []);

  const handleStationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentStation(e.target.value);
  };

  return (
    <div className='radioSelector-container'>
      
      {isLoading ? (
        <p>Loading stations...</p>
      ) : (
        <>
          <select onChange={handleStationChange} className='radio-player'>
            {stations.map((station, index) => (
              <option key={index} value={station.url}>
                {station.name}
              </option>
            ))}
          </select>
          {currentStation && (
            <div className='radio-controls'>
              <audio controls>
                <source src={currentStation} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RadioSelector;
