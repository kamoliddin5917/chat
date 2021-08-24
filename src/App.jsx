import "./App.scss";

import { Switch, Route } from "react-router-dom";

// components
import Saidbar from "./components/Saidbar/Saidbar";
import Posts from "./pages/Posts/Posts";
import PostSingle from "./pages/PostSingle/PostSingle";

function App() {
  return (
    <div className="app">
      <Saidbar />
      <Switch>
        <Route path="/:userId/:postId" component={PostSingle} />
        <Route path="/:userId" component={Posts} />
      </Switch>
    </div>
  );
}

export default App;
