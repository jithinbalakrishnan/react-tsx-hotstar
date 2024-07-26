import React from "react";
import { IMG_BASE_URL } from "../../constants/constant";
import "./card.css";

type Movie = {
  id: number
  title: string
  vote_average: number,
  backdrop_path: string
}


const Cards: React.FC<{list: Movie[]}> = (props) => {
  const { list } = props;
  return (
    <div className="card-container">
      {list.map((item: Movie) => (
        <div className="card" key={item.id}>
          <img src={IMG_BASE_URL + item.backdrop_path}></img>
          <p>{item.title}</p>
          <p>{item.vote_average}</p>
        </div>
      ))}
    </div>
  );
};
export default Cards;