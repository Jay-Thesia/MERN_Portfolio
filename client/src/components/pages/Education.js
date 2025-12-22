import React from "react";
// import { useContext } from "react";
// import { DataContext } from "../context/GlobalContext";

const Education = () => {
  // const state = useContext(DataContext);
  // const [eduValue] = state.education; // Reserved for dynamic data

  return (
    <div className="section-container bg-white dark:bg-gray-900" id="Education">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title">Education</h1>

        <div className="space-y-6">
          {/* Single Education */}
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 sm:p-6 md:p-8 border border-primary-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-500 dark:bg-primary-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-graduation-cap text-white text-xl"></i>
                </div>
              </div>
              <div className="flex-1 w-full text-center sm:text-left">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Information & Technology (2019-2023)
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-1">
                  Lukhdhirji Engineering College, Morbi
                </p>
                <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base">
                  CGPA: 9/10
                </p>
              </div>
            </div>
          </div>

          {/* Single Education */}
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 sm:p-6 md:p-8 border border-primary-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-500 dark:bg-primary-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-school text-white text-xl"></i>
                </div>
              </div>
              <div className="flex-1 w-full text-center sm:text-left">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  12th HSC (2018-19)
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-1">
                  Shraddha Vidhya Mandir, Ahmedabad
                </p>
                <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base">
                  PR: 83.40%
                </p>
              </div>
            </div>
          </div>

          {/* Single Education */}
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 sm:p-6 md:p-8 border border-primary-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-500 dark:bg-primary-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-book text-white text-xl"></i>
                </div>
              </div>
              <div className="flex-1 w-full text-center sm:text-left">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  10th SSC (2016-17)
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-1">
                  Shree Narayana Guru Vidhyalaya, Ahmedabad
                </p>
                <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base">
                  PR: 96.75%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
