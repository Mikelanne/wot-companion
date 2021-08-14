import './App.css'
import CharactersContainer from './containers/charactersContainer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/home"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      {/* <CharactersContainer /> */}
    </div>
  );
}

export default App;
