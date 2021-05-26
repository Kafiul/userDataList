import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import NoMatch from './component/NoMatch/NoMatch';
import UserId from './component/User/UserId';

function App() {
  
  return (
    <div >
        <Router>
          <Switch>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path = '/user/:UserId'>
              <UserId />
            </Route>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
