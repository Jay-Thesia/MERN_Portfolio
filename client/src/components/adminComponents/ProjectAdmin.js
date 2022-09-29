import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import photu from "../../images/Profile.jpg";
import axios from "axios";

const initialState = {
  project_id: "",
  title: "",
  description: "",
  link: "",
  images: "",
};

const ProjectAdmin = () => {
  const [project, setProject] = useState(initialState);
  const [images, setImage] = useState(false);
  const [message, setMessage] = useState("");
  const [messageCond, setMessageCond] = useState(false);
  const [projectData, setProjectData] = useState([]);

  //upload image functionality

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const file = e.target.files[0];

      if (!file) return alert("no file exist");

      if (file.size > 1024 * 1024) {
        return alert("size is too big");
      }

      if (
        file.type !== "image/jpg" &&
        file.type !== "image/jpeg" &&
        file.type !== "image/png"
      )
        return alert("incorrect file format");

      let formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("/upload", formData, {
        headers: { "content-type": "multipart/form-data" },
      });

      setImage(res.data);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  //delete images
  const handleDestroy = async () => {
    try {
      await axios.post("/destroy", { public_id: images.public_id });
      setImage(false);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  //handle change inputs
  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setProject({ ...project, [name]: value });
    // console.log(project.description);
    // console.log(project.title);
  };

  // Submit the form
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios.post("/project", { ...project, images }).then((res) => {
        setMessage(res.data.msg);
        setTimeout(() => {
          setMessage("");
        }, 2000);

        setProject(initialState);
        setImage(false);
      });
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const styleUpload = {
    display: images ? "block" : "none",
  };

  //fetching the data
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/project");
      setProjectData(res.data);
      // console.log(res.data)
    };

    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  //delete functionality

  return (
    <div className="same-component">
      <div className="same-form">
        <h3 className="eduAdmin">Project Component</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="text">Id :</label>
          <input
            type="text"
            name="project_id"
            required
            id="project_id"
            value={project.project_id}
            onChange={handleChangeInput}
          />

          <label htmlFor="text">Title :</label>
          <input
            type="text"
            name="title"
            required
            id="title"
            value={project.title}
            onChange={handleChangeInput}
          />

          <label htmlFor="text">Description :</label>
          <textarea
            type="text"
            cols="25"
            rows="6"
            name="description"
            required
            id="description"
            value={project.description}
            onChange={handleChangeInput}
          />

          <label htmlFor="link">Github Link :</label>
          <input name="link" id="link" onChange={handleChangeInput}/>

          <div className="upload">
            <input
              type="file"
              name="file"
              id="file_up"
              onChange={handleUpload}
            />
            <div id="file_img" style={styleUpload}>
              <img src={images ? images.url : ""} alt="" />

              <span onClick={handleDestroy}>X</span>
            </div>
          </div>

          <button type="submit" className="updateButton">
            Add item
          </button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          <div className="projects-admin">
            <div className="icons">
              <Link to={"/editProject"}>
                <i
                  style={{ color: "green", fontSize: "20px" }}
                  className="fa-solid fa-edit"
                ></i>
              </Link>
              <i
                style={{ color: "red", fontSize: "20px" }}
                className="fa-solid fa-trash"
              ></i>
            </div>
            <br />
            {/* single project */}
            <div className="single-project">
              <div className="single-project-add-imgage">
                <img src={photu} alt="project img" />
              </div>

              <div className="single-project-info">
                <h3>Hustle</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat consequuntur, harum distinctio quaerat saepe unde ipsa
                  totam id eligendi minima necessitatibus modi perspiciatis
                  mollitia error fuga quam dolor architecto a magni fugit
                  nostrum laboriosam? Consequuntur dolor, est eos nihil aliquid
                  expedita, beatae labore enim quasi iure quis, tenetur earum
                  delectus.
                </p>
              </div>
            </div>
            <h3 className="item-delete-tab">item deleted</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAdmin;
