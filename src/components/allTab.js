import { FiClock } from "react-icons/fi";
import moment from "moment";
const AllTab = ({ news, lastPost }) => {
  return (
    <>
      <a href={`${news.story_url}`} target="_blank" rel="noreferrer">
        <div className="container-news">
          <div className="time-row">
            <FiClock size={15} color="gray" />
            <h2>{`${moment(news.created_at).fromNow()} by ${news.author}`}</h2>
          </div>
          <h1  ref={lastPost} className="row-content">{`${news.story_title}`}</h1>
        </div>
      </a>
    </>
  );
};

export default AllTab;
