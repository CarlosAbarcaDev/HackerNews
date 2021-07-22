import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";

function App() {
  return(
  <Router>
    <Provider store={store}>
      <Header />
    </Provider>
  </Router>
  );
}

export default App;
