import React from "react";
import Card from "react-bootstrap/Card";
import SecondScreen from "../SecondScreen/SecondScreen";
import { Link } from "react-router-dom";

const CardItem = ({ movie ,handleDetails}) => {
  console.log(movie);
  const {image ,id,name,language ,type,genres,status,runtime } = movie
  return (
    <div className="my-5">
      <div className="card" >
        <img src={image.original} className="card-img-top" alt="movie image" style={{ height: "300px" }} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="d-flex justify-content-between">
            <p>Language: {language}</p>
            <p>Type:  {type}</p>
          </div>
        
          <Link to="secondpage" className="btn btn-primary">Movie Summary</Link>
        </div>
      </div>
      
    </div>
  );
};

export default CardItem;
