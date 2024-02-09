import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Card({ user }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={user.picture.large} alt={user.name.first} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.name.first} {user.name.last}</div>
        <p className="text-gray-700 text-base">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Phone:</strong> {user.phone}
        </p>
      </div>
    </div>
  );
}

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      {userData && <Card user={userData} />}
    </div>
  );
}

export default App;
