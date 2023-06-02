import React, { useState, useEffect } from "react";
import CardItem from "../CardItem/CardItem";

const HomeScreen = () => {
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
    <div className='container'>
    <div className="row">
      {data.map((movie) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={movie.show?.id}>
          <CardItem movie={movie.show}  />
        </div>
      ))}
    </div>
  </div>
  );
};

export default HomeScreen;
