import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import AppDetail from "./Components/AppDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/:appname/:publisher/:id" component={AppDetail} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
