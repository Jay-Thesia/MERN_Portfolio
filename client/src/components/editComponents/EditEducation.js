import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditEducation = (props) => {
  const [eduValue, setEducation] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  //getting the specific id
  useEffect(() => {
    axios
      .get(`/education/${id}`)
      .then((res) => {
        setEducation(res.data.eduValue);
      })
      .catch((err) => console.log(err));
  }, []);

  //onchange
  const onChangeEducation = (e) => {
    setEducation(e.target.value);
  };

  //update Education
  const updateEducation = (e) => {
    e.preventDefault();

    const postEducation = {
      eduValue,
    };

    axios
      .put(`/education/update/${id}`, postEducation)
      .then((res) => {
        setMessage(res.data.msg);
      })
      .catch((err) => console.log(err));

    setEducation("");

    setTimeout(() => {
      navigate("/admin");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Edit Education
          </h2>

          {message && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-sm font-medium">{message}</p>
            </div>
          )}

          <form onSubmit={updateEducation} className="space-y-6">
            <div>
              <label
                htmlFor="education"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Education
              </label>
              <textarea
                id="education"
                name="textarea"
                rows="8"
                value={eduValue}
                onChange={onChangeEducation}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none transition-colors"
                placeholder="Enter education information..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
              >
                Update Education
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

export default EditEducation;
