import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Team from './Components/Team';
import { Mem } from './Screens/members';
import { Lab } from './Screens/About';
import Updates from './Components/home-components/Updates';
import Navbar from './Components/Navbar';
import Mentorship from './Components/Mentorship';
import Contact from './Screens/Contact';
import { Desktop } from './Screens/aktuform';
import Collegepredictor from './Screens/Collegepredictor'
import Abots from './Screens/Abots';
import Flag from './Screens/contactus'
import Contactme from './Screens/contactus';
import Launch from './Screens/launchingsoon';
import Form from './Components/home-components/Form';
import Personalmentor from './Screens/Personalmentor';
import Community from './Components/Community';
import Bot from './Components/home-components/Bot'
import slider from './Components/home-components/slider';
import joinUs from './Components/home-components/joinUs';
import joinForm from './Components/home-components/joinForm';
// import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/community' component={Community} />
          <Route path="/about" component={Abots} />
          <Route path='/contact' component={Contact} />
          <Route path='/collegepredictor' component={Collegepredictor} />
          <Route path='/personalmentor' component={Personalmentor} />
          <Route path='/form' component={Form} />
          <Route path='/Launchingsoon' component={Launch} />
          <Route path='/aa' component={slider} />
          <Route path='/join' component={joinUs} />
          <Route path='/hiring' component={joinForm} />
        </Switch>
        <Footer />
      </div>
      <a href="https://wa.me/message/37PSY2CRRSIJE1" target='_blank'><Bot /></a>
    </Router>
  );
}

export default App;
