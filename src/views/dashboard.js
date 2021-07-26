import { useEffect, useState, useRef, useCallback } from "react";
import ReactLoading from "react-loading";
import { useSelector, useDispatch } from "react-redux";
import { angularNewsList, LoadMoreNews } from "../actions/angularNewsList";
import { reactNewsList } from "../actions/reactNewsList";
import { vueNewsList } from "../actions/vueNewsList";
import AllTab from "../components/allTab";
import FavTab from "../components/favTab";

const Dashboard = () => {
  const [allSelected, setAllSelected] = useState(true);
  const [favsSelected, setfavsSelected] = useState(false);
  const [page, setPage] = useState(0);
  const [option, setOption] = useState("angular");
  const dispatch = useDispatch();
  const loader = useRef(null);

  //global state
  const newsList = useSelector((state) => state.news.news);
  const error = useSelector((state) => state.news.error);
  const loading = useSelector((state) => state.news.loading);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];

    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  //angular news list at first loading
  useEffect(() => {
    const angularNews = () => dispatch(angularNewsList(page));
    angularNews();
  }, []);

  useEffect(() => {
    if (page > 1) {
      dispatch(LoadMoreNews(page, option));
    }
  }, [page]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  //option selected
  const onChangeOptions = (e) => {
    const optionSelected = e.target.value;
    setPage(0);
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
            onChange={(e) => {
              onChangeOptions(e);
              setOption(e.target.value);
            }}
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
                {newsList.map((news) => {
                  return <AllTab key={news.objectID} news={news} />;
                })}
              </>
            )}
            <div ref={loader} />
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
