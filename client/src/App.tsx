//libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//Components
import Navbar from './components/Nabvar';
import ImageCarousel from './components/ImageCarousel';
import Herounit from './components/Herounit';
import LoginPage from './components/LoginPage';
import CreateAccount from './components/CreateAccount';
import ClassGrid from './components/ClassGrid';

//models
import { classes } from './Models/models';

//images
import logo from './img/logo/fullLogo.png';
import icon from './img/logo/icon.png';
import slide1 from './img/carousel/slide1.jpg'
import slide2 from './img/carousel/slide2.jpg'

function App() {
  return (
    <Router>
      <div>
        <Navbar brandImage={logo} />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <ImageCarousel images={[slide1, slide2]} texts={["Catalyse Your Success.", "Take Control Of Your Learning, One P&ID At A Time."]} stexts={["Learn, Study, and Test All In The Same Place", "200+ Practice Questions and Detailed Solutions"]} />
                <Herounit header="Our Mission" imageName={icon} paragraph={["At EasyChemE, we recognize the need for innovative and engaging resources in the chemical engineering field. Traditional learning methods in this industry have often been slow to evolve, leaving students without modern and effective tools to master the subject. We are dedicated to revolutionizing the way students learn chemical engineering by providing a comprehensive platform that combines the power of technology with a deep understanding of the students' needs.", "Our learning application is designed by students, for students, bridging the gap between complex concepts and relatable explanations. By shifting away from the conventional textbook approach, we create a graphical-rich learning experience that enhances comprehension and retention. Our content is developed with the learner in mind, ensuring that even the most intricate ideas are presented in an accessible and engaging manner.", "Join us in our mission to modernize chemical engineering education and empower the next generation of engineers to shape the future of this vital industry by equiping them with the knowledge and skills to excel in their studies and beyond."]} />
                <div className="bg-light p-4" id='missionclassbreak'>
                  <hr style={{ borderColor: 'black' }} />
                </div>
                <ClassGrid classes={classes} />
              </>
            } />
            <Route path="/login" element={
              <>
                <LoginPage logoName={logo} />
              </>
            } />
            <Route path="/CreateAccount" element={
              <>
                <CreateAccount logoName={logo} />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App