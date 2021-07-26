import { useState } from "react";
import { FiClock } from "react-icons/fi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import moment from "moment";

import { saveFavorite } from "../config/localStorage";

const AllTab = ({ news, lastPost }) => {

  //favorite post selected
  const [favSelected, setFavSelected] = useState(false);
  const onClickFav = post =>{
    saveFavorite(post);
  }
  return (
    <>
      <div className="container-news">
        <div className="time-row">
          <a href={`${news.story_url}`} target="_blank" rel="noreferrer">
            <div className="time">
              <FiClock size={15} color="gray" />
              <h2>{`${moment(news.created_at).fromNow()} by ${
                news.author
              }`}</h2>
            </div>
            <h1
              ref={lastPost}
              className="row-content"
            >{`${news.story_title}`}</h1>
          </a>
        </div>
        <div className="favorites" onClick={() => {
          setFavSelected(!favSelected)
          onClickFav(news)
          }}>
          {favSelected ? (
            <AiFillHeart size={30} color="red" />
          ) : (
            <AiOutlineHeart size={30} color="red" />
          )}
        </div>
      </div>
    </>
  );
};

export default AllTab;
