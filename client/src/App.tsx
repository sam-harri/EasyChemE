//libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


//Components
import Navbar from './components/Nabvar';
import ImageCarousel from './components/ImageCarousel';
import Herounit from './components/Herounit';
import LoginPage from './components/LoginPage';
import CreateAccount from './components/CreateAccount';
import ClassGrid from './components/ClassGrid';
import MyAccount from './components/MyAccount';
import CHG1125 from './classes/CHG1125/CHG1125';

//models
import { classesModel, carouselModel, herounitModel, logoModel } from './models/models';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser && storedUser !== 'undefined') {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);
  ;



  return (
    <Router>
      <div>
        <Navbar brandImage={logoModel.logo} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
        <main>
          <Routes>

            <Route
              path="/"
              element={
                <>
                  <ImageCarousel
                    images={carouselModel.images}
                    texts={carouselModel.text}
                    stexts={carouselModel.stexts}
                  />
                  <Herounit
                    header={herounitModel.header}
                    imageName={herounitModel.imageName}
                    paragraph={herounitModel.paragraph}
                  />
                  <div className="bg-light p-4" id="missionclassbreak">
                    <hr style={{ borderColor: 'black' }} />
                  </div>
                  <ClassGrid classes={classesModel} />
                </>
              }
            />

            <Route path="/login" element={
                <LoginPage logoName={logoModel.logo} setLoggedInUser={setLoggedInUser} />
            } />

            <Route
              path="/CreateAccount"element={
                <CreateAccount logoName={logoModel.logo} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
            } />

            <Route
              path="/MyAccount" element={
                <MyAccount loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
            } />

            <Route
              path="/CHG1125/*"element={
              <CHG1125 loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
            } />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

