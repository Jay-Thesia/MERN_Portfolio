import React from "react";
import { Link } from "react-router-dom";
import AboutAdmin from "./AboutAdmin";
import EducationAdmin from "./EducationAdmin";
import ExperienceAdmin from "./ExperienceAdmin";
import ProjectAdmin from "./ProjectAdmin";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your portfolio content from here
          </p>
        </div>

        <div className="space-y-8">
          {/* About Admin */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <AboutAdmin />
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700"></div>

          {/* Education Admin */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <EducationAdmin />
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700"></div>

          {/* Project Admin */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <ProjectAdmin />
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700"></div>

          {/* Experience Admin */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <ExperienceAdmin />
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
          >
            <i className="fas fa-home mr-2"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
