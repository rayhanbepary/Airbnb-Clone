import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { AirCncContext } from './Context';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Room from './pages/Room/Room';
import RoomDetailWrapper from './pages/RoomDetail/RoomDetailWrapper';
import Confirm from './pages/Confirm/Confirm';

function App() {

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/s/:location" exact component={Room} />
      <Route path="/rooms/:slug" exact component={RoomDetailWrapper} />
      <Route path="/book/stays/:slug" exact component={Confirm} />
    </Switch>
  );
}

export default App;
