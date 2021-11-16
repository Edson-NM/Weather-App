import './App.css';

//ROUTER
import { BrowserRouter, Switch, Route } from "react-router-dom"

//Layout
import MainLayout from "../src/Components/MainLayout/MainLayout.jsx"

//PAGES
import Home from './Pages/Home/Home';
import WeatherDetails from "./Pages/WeatherDetails/WeatherDetails.jsx"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <MainLayout>

            <Route path="/" exact>
              <Home/>
            </Route>

            <Route path="/details/:name" exact>
              <WeatherDetails/>
            </Route>

          </MainLayout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
