import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import Navbar from "./components/pages/Navbar";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

//admin components
import Admin from "./components/adminComponents/Admin";

//edit components
import EditAbout from "./components/editComponents/EditAbout";
import EditEducation from "./components/editComponents/EditEducation";
import EditExperience from "./components/editComponents/EditExperience";
import EditProject from "./components/editComponents/EditProject";

import { Route, Routes } from "react-router-dom";
import { DataContext } from "./components/context/GlobalContext";
import { useContext } from "react";

function App() {
  const state = useContext(DataContext);
  const [isLogin] = state.isLogin;

  return (
    <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <nav>
        <Navbar />
      </nav>

      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/admin"
          element={isLogin ? <Admin /> : <Login />}
        />
        <Route exact path="/editAbout/:id" element={<EditAbout />} />
        <Route
          exact
          path="/editExperience/:id"
          element={<EditExperience />}
        />
        <Route
          exact
          path="/editEducation/:id"
          element={<EditEducation />}
        />
        <Route exact path="/editProject/:id" element={<EditProject />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

