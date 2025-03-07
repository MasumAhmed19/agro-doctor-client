import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../../../firebase/firebase.config'; // Import your Firebase setup

const DiseaseIdentify = () => {
  const [data, setData] = useState(null); // State to store database data

  useEffect(() => {
    const dbRef = ref(database, '/'); // Root reference (fetches entire DB)
    
    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val()); // Update state with database data
      } else {
        setData(null);
      }
    });

    return () => unsubscribe(); // Cleanup listener when component unmounts
  }, []);

  console.log(data)

  return (
    <div>
      <h2>Disease Identification Data</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Display JSON data
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DiseaseIdentify;
