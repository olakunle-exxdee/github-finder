import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={Users} />
          <Route path="/users/:username" exact component={UserDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
