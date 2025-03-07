import { createContext, useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase/firebase.config";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dbRef = ref(database, "/");

    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        setData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}> 
      {children}
    </DataContext.Provider>
  );
};
