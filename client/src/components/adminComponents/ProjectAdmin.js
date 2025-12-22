import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  };

  // Submit the form
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios.post("/project", { ...project, images }).then((res) => {
        setMessage(res.data.msg);
        setMessageCond(true);
        setTimeout(() => {
          setMessage("");
          setMessageCond(false);
        }, 2000);

        setProject(initialState);
        setImage(false);
        fetchData(); // Refresh the list
      });
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  //fetching the data
  const fetchData = async () => {
    const res = await axios.get("/project");
    setProjectData(res.data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Project Component
        </h3>

        {messageCond && (
          <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-sm font-medium">{message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="project_id"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Project ID
            </label>
            <input
              type="text"
              name="project_id"
              required
              id="project_id"
              value={project.project_id}
              onChange={handleChangeInput}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
              placeholder="Enter project ID"
            />
          </div>

          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              required
              id="title"
              value={project.title}
              onChange={handleChangeInput}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
              placeholder="Enter project title"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Description
            </label>
            <textarea
              type="text"
              rows="6"
              name="description"
              required
              id="description"
              value={project.description}
              onChange={handleChangeInput}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none transition-colors"
              placeholder="Enter project description"
            />
          </div>

          <div>
            <label
              htmlFor="file_up"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Project Image
            </label>
            <input
              type="file"
              name="file"
              id="file_up"
              onChange={handleUpload}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 dark:file:bg-primary-900 dark:file:text-primary-300 transition-colors"
            />
            {images && (
              <div className="mt-4 relative inline-block">
                <img
                  src={images.url}
                  alt="Preview"
                  className="max-w-xs rounded-lg border border-gray-200 dark:border-gray-600"
                />
                <button
                  type="button"
                  onClick={handleDestroy}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  ×
                </button>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
          >
            Add item
          </button>
        </form>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Projects List
        </h3>
        <div className="space-y-4">
          {projectData.map((item) => (
            <div
              key={item._id}
              className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center space-x-3 ml-4">
                  <Link to={`/editProject/${item._id}`}>
                    <i className="fas fa-edit text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-lg cursor-pointer transition-colors"></i>
                  </Link>
                  <i className="fas fa-trash text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-lg cursor-pointer transition-colors"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectAdmin;
