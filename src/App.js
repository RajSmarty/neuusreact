import './App.css';
import React, { useState } from 'react';
// import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import AccessDenied from './components/AccessDenied';
import Jumper from './components/Jumper';
import Profile from './components/Profile';
import ProfileDesc from './components/ProfileDesc';
import EditProfile from './components/EditProfile';
import Codestate from './context/codes/Codestate';
import ReaderPage from './components/ReaderPage';
import Professional from './components/Professional';
import Trending from './components/Trending';
// import Newsz from './components/Newsz';
// import Selectnews from './components/Seclectnews';

const App = () => {
  const apiKeyz = "f4874928fd994ad5b64b9bfe98a1164a"
  const apiKey = "03e4afe4a0dd4e6ba5caa195f378a415"
  
  const pageSize = 6;
  const pageSizeDup = 30;
  const pageSource = "Moneycontrol"
  const [progress, setProgress] = useState(0)

  return (
    <>
      <Codestate>
        <div>
          <Router>
            <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
            />

            <Switch>
              <Route exact path="/news"><News setProgress={setProgress} apiKey={apiKey} pageSource={pageSource} key="general" pageSize={pageSize} country="gb" category="general" /></Route>
              <Route exact path="/pro"><Professional setProgress={setProgress} apiKey={apiKey} pageSource={pageSource} key="Professional" pageSize={pageSizeDup} country="gb" category="technology" /></Route>
              <Route exact path="/trending"><Trending setProgress={setProgress} apiKey={apiKey} pageSource={pageSource} key="Trending" pageSize={pageSize} country="gb" category="health" /></Route>

              
              <Route exact path="/reader"><ReaderPage setProgress={setProgress} apiKey={apiKey} pageSource={pageSource} key="general" pageSize={pageSize} country="gb" category="general" /></Route>
              {/* <Route exact path="/newz"><Newsz setProgress={setProgress} apiKeyz={apiKeyz} pageSource={pageSource} key="general" pageSize={pageSize} country="us" category="general" /></Route> */}
              
              {/* <Route exact path="/newsb"><Selectnews setProgress={setProgress} /></Route> */}

              <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" /></Route>
              <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
              <Route exact path="/general"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" /></Route>
              <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" /></Route>
              <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" /></Route>
              <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />
              </Route>
              <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/accessdenied">
                <AccessDenied />
              </Route>
              <Route exact path="/redirect">
                <Jumper />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route exact path="/profiledesc">
                <ProfileDesc />
              </Route>
              <Route exact path="/profiledit">
                <EditProfile />
              </Route>
            </Switch>
            {/* <NavBar /> */}
          </Router>
        </div>
      </Codestate>
    </>
  )

}

export default App;