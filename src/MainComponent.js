
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'; 

function MainComponent() {
  const [apiData, setApiData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get ('https://randomuser.me/api/?page=1&results=1&seed=abc');
      setApiData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>API Data on Card</h1>
      {apiData && <Card data={apiData} />}
    </div>
  );
}

export default MainComponent;
