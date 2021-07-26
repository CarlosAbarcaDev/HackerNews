import { useEffect, useState } from "react";
import { getFavList } from "../config/localStorage";
import { FiClock } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import moment from "moment";
const FavTab = () => {
  const [postsFavsList, setPostFavsList] = useState([]);
  useEffect(() => {
    setPostFavsList(getFavList());
  }, []);

  console.log(postsFavsList);
  return (
    <>{postsFavsList !== [] ? 
    
    <>
    {postsFavsList.map( post => {
        return(
            <div className="container-news">
            <div className="time-row">
              <a href={`${post.story_url}`} target="_blank" rel="noreferrer">
                <div className="time">
                  <FiClock size={15} color="gray" />
                  <h2>{`${moment(post.created_at).fromNow()} by ${
                    post.author
                  }`}</h2>
                </div>
                <h1
                  className="row-content"
                >{`${post.story_title}`}</h1>
              </a>
            </div>
            <div className="favorites">
                <AiFillHeart size={30} color="red" />
             
            </div>
          </div>
        )
    } )}
    </> 
    : <h1>No News...</h1>}
    </>
  );
};

export default FavTab;
