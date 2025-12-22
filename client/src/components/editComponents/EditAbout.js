import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditAbout = (props) => {
  const [aboutValue, setAbout] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  //getting the specific id
  useEffect(() => {
    axios
      .get(`/about/${id}`)
      .then((res) => {
        setAbout(res.data.aboutValue);
      })
      .catch((err) => console.log(err));
  }, []);

  //onchange
  const onchangeAbout = (e) => {
    setAbout(e.target.value);
  };

  //update about
  const updateAbout = (e) => {
    e.preventDefault();

    const postAbout = {
      aboutValue,
    };

    axios
      .put(`/about/update/${id}`, postAbout)
      .then((res) => {
        setMessage(res.data.msg);
      })
      .catch((err) => console.log(err));

    setAbout("");

    setTimeout(() => {
      navigate("/admin");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Edit About
          </h2>

          {message && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-sm font-medium">{message}</p>
            </div>
          )}

          <form onSubmit={updateAbout} className="space-y-6">
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
                value={aboutValue}
                onChange={onchangeAbout}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none transition-colors"
                placeholder="Enter about information..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
              >
                Update Item
              </button>
              <Link to="/admin" className="flex-1">
                <button
                  type="button"
                  className="w-full px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAbout;
