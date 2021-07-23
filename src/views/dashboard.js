import { useEffect, useState, useRef, useCallback } from "react";
import ReactLoading from "react-loading";
import { useSelector, useDispatch } from "react-redux";
import { angularNewsList } from "../actions/angularNewsList";
import { reactNewsList } from "../actions/reactNewsList";
import { vueNewsList } from "../actions/vueNewsList";
import AllTab from "../components/allTab";
import FavTab from "../components/favTab";

const Dashboard = () => {
  const [allSelected, setAllSelected] = useState(true);
  const [favsSelected, setfavsSelected] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  //angular news list at first loading
  useEffect(() => {
    const angularNews = () => dispatch(angularNewsList(page));
    angularNews();
  }, []);

  //global state
  const newsList = useSelector((state) => state.news.news);
  const error = useSelector((state) => state.news.error);
  const loading = useSelector((state) => state.news.loading);

  // set page to infinity scroll
  const observer = useRef();
  const lastPost = useCallback((node) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('visible');
        setPage( prevPage => prevPage + 1 );
      }
    });

    if (node) observer.current.observe(node);
  }, []);

  //option selected
  const onChangeOptions = (e) => {
    const optionSelected = e.target.value;

    if (optionSelected === "angular") {
      const angularNews = () => dispatch(angularNewsList(page));
      angularNews();
    }
    if (optionSelected === "react") {
      const reactNews = () => dispatch(reactNewsList(page));
      reactNews();
    }
    if (optionSelected === "vue") {
      const vueNews = () => dispatch(vueNewsList(page));
      vueNews();
    }
  };
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
          <select
            name="select"
            className="select-box"
            onChange={(e) => onChangeOptions(e)}
          >
            <option value="">-- Choose an option --</option>
            <option value="angular">Angular</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
          </select>
          <div className="loading-container">
            {error ? <h1>Error... try again later</h1> : null}
            {loading ? (
              <ReactLoading
                type={"balls"}
                color={"gray"}
                height={"50px"}
                width={"100px"}
              />
            ) : null}
          </div>
          <div className="container">
            {newsList.length === 0 ? (
              <h1>'There is no more news at the moment'</h1>
            ) : (
              <>
                {newsList.map((news, index) => {
                  if (newsList.length === index + 1) {
                    return (
                      <AllTab
                        key={news.author}
                        news={news}
                        lastPost={lastPost}
                      />
                    );
                  } else {
                    return <AllTab key={news.author} news={news} />;
                  }
                })}
              </>
            )}
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
