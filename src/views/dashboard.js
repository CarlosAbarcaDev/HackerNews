import { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import { useSelector, useDispatch } from "react-redux";
import { angularNewsList } from "../actions/angularNewsList";
import AllTab from "../components/allTab";
import FavTab from "../components/favTab";
const Dashboard = () => {
  const [allSelected, setAllSelected] = useState(true);
  const [favsSelected, setfavsSelected] = useState(false);
  const dispatch = useDispatch();

  //angular news list
useEffect(() =>{
  const angularNews = () => dispatch(angularNewsList())
  angularNews()
}, [])

//global state 
const newsList = useSelector(state => state.news.news);
const error = useSelector(state => state.news.error);
const loading = useSelector(state => state.news.loading);


  return (
    <>
      <div className="button-container">
        <button
          className={allSelected ? "button-tab-selected" : "button-tab"}
          onClick={() => {
            setAllSelected(true);
            setfavsSelected(false);
          }}
        >
          All
        </button>
        <button
          className={favsSelected ? "button-tab-selected" : "button-tab"}
          onClick={() => {
            setAllSelected(false);
            setfavsSelected(true);
          }}
        >
          My faves
        </button>
      </div>

      {allSelected ? (
        <>
        <select name="select" className='select-box'>
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        <div className='loading-container'>

          {error ? <h1>Error... try again later</h1> : null}
          { loading ?  <ReactLoading type={"balls"} color={'gray'} height={'50px'} width={'100px'} /> : null }
        </div>
        <div className="container">
         
          { newsList.length === 0 ? <h1>'There is no news at the moment'</h1> : (
            newsList.map( news =>(
              <AllTab 
                key={news.parent_id}
                news={news}
              />
            ))
          ) }
        </div>
        </>
      ) : (
        <div className="container">
          <FavTab />
        </div>
      )}
    </>
  );
};

export default Dashboard;
