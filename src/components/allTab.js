import { FiClock } from "react-icons/fi";
import moment from "moment";
const AllTab = ({news}) => {
    return ( 
        <>

        <div className='container-news'>
            <div className='time-row'>
                <FiClock size={15} color='gray' />
                <h2>{`${moment(news.created_at).fromNow()} by ${news.author}`}</h2>
            </div>
            <h1 className='row-content'>{`${news.story_title}`}</h1>
        </div>
        </>
     );
}
 
export default AllTab;