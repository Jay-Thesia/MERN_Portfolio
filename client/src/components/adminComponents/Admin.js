import React from "react";
import "./admin.css";
import { Link } from "react-router-dom";
import AboutAdmin from "./AboutAdmin";
import EducationAdmin from "./EducationAdmin";
import ExperienceAdmin from "./ExperienceAdmin";
import ProjectAdmin from "./ProjectAdmin";

const Admin = () => {
  return (
    <div className="main-container">
      <h1 className="title">Admin forms</h1>
      <div className="admin-center">
        {/* about component */}
        <AboutAdmin />
        {/* end of about componet */}

        <br />
        <hr />
        
        {/* Education component */}
        <EducationAdmin />
        {/* End of education componet */}

        <br />
        <hr />

        {/* Project component */}
        
        <ProjectAdmin />
        {/* End of project component */}

        <br />
        <hr />

        {/* Experience component */}
        
        <ExperienceAdmin />
        {/* End of experience component */}
      </div>
    </div>
  );
};

export default Admin;
