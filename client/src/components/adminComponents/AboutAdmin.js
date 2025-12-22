import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AboutAdmin = () => {
  const [aboutValue, setAbout] = useState("");
  const [aboutData, setAboutData] = useState([]);
  const [message, setMessage] = useState("");
  const [messageCondition, setMessageCondition] = useState(false);

  //fetching data
  const fetchData = async () => {
    const res = await axios.get("/about");
    setAboutData(res.data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  //onchange
  const onchangeAbout = (e) => {
    setAbout(e.target.value);
  };

  //submit about change
  const handleSubmit = (e) => {
    e.preventDefault();

    const postValue = {
      aboutValue,
    };

    setAbout("");
    axios
      .post("/about", postValue)
      .then((res) => {
        fetchData(); // Refresh the list
      })
      .catch((err) => console.log(err));
  };

  //delete about
  const deleteAbout = (id) => {
    const aboutFliterDel = aboutData.filter((item) => item._id !== id);
    setAboutData(aboutFliterDel);

    axios
      .delete(`/about/${id}`)
      .then((res) => {
        setMessageCondition(true);
        setMessage(`${res.data.msg}`);

        setTimeout(() => {
          setMessage("");
          setMessageCondition(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          About Component
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              About
            </label>
            <textarea
              id="about"
              name="textarea"
              rows="6"
              onChange={onchangeAbout}
              value={aboutValue}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none transition-colors"
              placeholder="Enter about information..."
            />
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
        {messageCondition && (
          <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-sm font-medium">{message}</p>
          </div>
        )}
        <div className="space-y-4">
          {aboutData.map((item) => (
            <div
              key={item._id}
              className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="text-gray-700 dark:text-gray-300">{item.aboutValue}</p>
                </div>
                <div className="flex items-center space-x-3 ml-4">
                  <Link to={`/editAbout/${item._id}`}>
                    <i className="fas fa-edit text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-lg cursor-pointer transition-colors"></i>
                  </Link>
                  <i
                    className="fas fa-trash text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-lg cursor-pointer transition-colors"
                    onClick={() => deleteAbout(item._id)}
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutAdmin;
