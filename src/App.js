import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import DisplayURL from "./DisplayURL";
import Landing from "./Landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
      <Switch>
        {/* <Route to="/documents"></Route> */}
        <Route path="/documents/:id">
          <DisplayURL />
          <TextEditor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
