import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Dashboard from "./views/dashboard";


function App() {
  return(
  <Router>
    <Provider store={store}>
      <Header />
      <div>
        <Switch>
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </div>
    </Provider>
  </Router>
  );
}

export default App;
