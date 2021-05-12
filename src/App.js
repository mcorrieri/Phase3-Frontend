import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from './Header';
import National from './National';
import Search from './Search'
import StateCard from './StateCard';
import Wrapper from "./components/Wrapper";
import { Grid } from "semantic-ui-react";
import StateChart from './StateChart';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode)
  }

  
  
  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Grid>
        <Grid.Column width={4}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
        </Grid.Column>
        <Grid.Column width={12}>      
          <Switch>
            <Route exact path ="/">
              <National/>
            </Route>
            <Route exact path ="/statecard">
              <StateCard/>
            </Route>
            <Route exact path ="/statechart">
              <StateChart/>
            </Route>
            <Route path="*">
              <h1>404 WRONG</h1>
            </Route>
          </Switch>
          </Grid.Column>
        </Grid>
    </div>
  );
}

export default App;
