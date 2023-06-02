import React, { useEffect, useState } from 'react';
import SecondScreen from '../SecondScreen/SecondScreen';

const SecondPage = () => {
    const [data, setData] = useState([]); // State to hold API data

    useEffect(() => {
      // Fetch data from API
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://api.tvmaze.com/search/shows?q=all"
          );
          const jsonData = await response.json();
          console.log(jsonData);
          setData(jsonData);
        } catch (error) {
          console.log("Error fetching data from API:", error);
        }
      };
  
      fetchData();
    }, []);
   
    
  
    console.log(data);
    return (
        <div>
           {
            data.map(movie => <SecondScreen key={movie.show.id} movie= {movie.show}>

            </SecondScreen>)
           }
        </div>
    );
};

export default SecondPage;