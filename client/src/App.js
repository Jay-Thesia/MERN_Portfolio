import "./App.css";

import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import Navbar from "./components/pages/Navbar";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
import Education from "./components/pages/Education";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";

//admin componets
import Admin from "./components/adminComponents/Admin";

//edit components
import EditAbout from "./components/editComponents/EditAbout";
import EditEducation from "./components/editComponents/EditEducation";
import EditExperience from "./components/editComponents/EditExperience";
import EditProject from "./components/editComponents/EditProject";

import { Route, Routes } from "react-router-dom";
import {Element} from 'react-scroll'
import {DataContext} from './components/context/GlobalContext';
import { useContext } from "react";

function App() {

  const state=useContext(DataContext);
  const [isLogin,setIsLogin]=state.isLogin;
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>

      
      {/* <Element>       */}
        <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="/" element={<About />} />
        <Route exact path="/" element={<Experience />} />
        <Route exact path="/" element={<Education />} />
        <Route exact path="/" element={<Project />} />
        <Route exact path="/" element={<Contact />} />

        <Route exact path="/login" element={<Login />} />

        {/* any one can access to your admin by putting /admin in url WITHOUT LOGIN  */}
        {/* <Route exact path="/admin" element={<Admin />} /> */}

        {/* if you login than and than you can access admin */}
        <Route exact path="/admin" element={isLogin? <Admin/>:<Login/>}/>

        <Route exact path="/editAbout/:id" element={<EditAbout />} />
        <Route exact path="/editExperience/:id" element={<EditExperience />} />
        <Route exact path="/editEducation/:id" element={<EditEducation />} />
        <Route exact path="/editProject/:id" element={<EditProject />} />
      </Routes>
      {/* </Element> */}

      <footer>
        <Footer />
      </footer>
    </div>
  );

  
}



export default App;
