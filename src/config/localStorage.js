export const getFavList = () => {
  const list = localStorage.getItem("post");
  return list === null ? [] : JSON.parse(list);
};

const postAdded = (post) => {
  localStorage.setItem("post", JSON.stringify(post));
};
export const saveFavorite = (post) => {
  const postsFavs = getFavList();
  postsFavs.push(post);
  postAdded(postsFavs);
};

