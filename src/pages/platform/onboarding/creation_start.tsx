import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RoleSelection() {
  const [studySetName, setStudySetName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // In a real app, you would save the study set here
    alert(`Study Set "${studySetName}" created successfully!`);
    navigate('/platform/dashboard');
  };

  return (
    <div
      data-is-root-theme="true"
      data-accent-color="indigo"
      data-gray-color="slate"
      data-has-background="true"
      data-panel-background="translucent"
      data-radius="medium"
      data-scaling="100%"
      className="radix-themes"
    >
      <div className="w-screen h-screen flex flex-row" id="platform-layout">
        <div className="flex-1 bg-white dark:bg-dark w-full overflow-y-auto z-10 self-stretch">
          <div className="w-full h-screen flex flex-row">
            <div
              className="relative overflow-hidden"
              style={{
                display: "flex",
                flexDirection: "row",
                height: "100%",
                overflow: "hidden",
                width: "100%",
              }}
              data-panel-group
              data-panel-group-direction="horizontal"
              data-panel-group-id="«Rkmpqmomnb»"
            >
              <div
                className="flex flex-col h-full overflow-hidden md:border-r border-r-slate-100 dark:border-r-[#AB9FF2] dark:border-opacity-20 relative "
                style={{ flex: "1 1 0px", overflow: "hidden" }}
                data-panel
                data-panel-group-id="«Rkmpqmomnb»"
                data-panel-id="«R3kmpqmomnb»"
                data-panel-size={1.0}
              >
                <div className="h-full w-full flex flex-col overflow-y-auto relative">
                  <div className="overflow-y-auto w-full h-full flex flex-col">
                    <div>
                      <main className="w-full h-full overflow-y-auto dark:bg-dark">
                        <div className="w-full max-w-screen-2xl mx-auto relative">
                          <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 z-50">
                            <div
                              className="h-full bg-blue"
                              style={{ width: "72.7273%" }}
                            />
                          </div>
                          <div
                            className="min-h-screen"
                            style={{ opacity: 1, transform: "none" }}
                          >
                            <div className="flex flex-col relative h-screen w-full overflow-hidden">
                              <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between gap-4 px-4 py-4 bg-white/90 dark:bg-dark/90 lg:bg-transparent lg:dark:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
                                <button
                                  onClick={() => navigate(-1)}
                                  aria-busy="false"
                                  className="px-4 py-2.5 text-[1rem] font-semibold min-h-[44px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 inline-flex gap-2 justify-center items-center"
                                  aria-disabled="false"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-chevron-left w-5 h-5"
                                    aria-hidden="true"
                                  >
                                    <path d="m15 18-6-6 6-6" />
                                  </svg>
                                  Back
                                </button>
                                <button
                                  onClick={handleSubmit}
                                  disabled={!studySetName.trim()}
                                  aria-busy="false"
                                  className={`px-4 py-2.5 text-[1rem] font-semibold min-h-[44px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                                    studySetName.trim()
                                      ? "bg-blue hover:bg-blue2 text-gray-800 border border-blue hover:border-blue2 focus:ring-blue dark:focus:ring-blue2"
                                      : "bg-gray-300 text-gray-500 border border-gray-300"
                                  } focus:ring-offset-white dark:focus:ring-offset-gray-900 inline-flex gap-2 justify-center items-center`}
                                  aria-disabled={!studySetName.trim()}
                                >
                                  Create Study Set
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-rocket w-6 h-6"
                                    aria-hidden="true"
                                  >
                                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                  </svg>
                                </button>
                              </div>
                              <div className="flex-1 overflow-y-auto pt-[90px] scrollbar:w-[5px]">
                                <div className="flex flex-col md:justify-center min-h-full">
                                  <div className="text-center px-6 pb-6">
                                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-800 mb-2">
                                      Let's Create Your First Study Set
                                    </h1>
                                    <p className="text-xs md:text-base text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
                                      A Study Set is your class space for
                                      notes, flashcards, and quizzes — all in
                                      one place. Each set comes with
                                      personalized insights to help you track
                                      your progress and stay on top of your
                                      goals.
                                    </p>
                                  </div>
                                  <div className="flex items-center md:justify-center px-6 py-2 md:py-8">
                                    <div className="max-w-5xl w-full">
                                      <div className="flex flex-col lg:flex-row gap-8 justify-between">
                                        <div className="w-full lg:w-auto lg:flex-shrink-0">
                                          <div className="lg:min-w-[28rem] max-w-xl">
                                            <form>
                                              <div className="space-y-4">
                                                <div className="space-y-2">
                                                  <label className="block text-sm font-medium text-primary dark:text-gray-800">
                                                    Study Set Name{" "}
                                                    <span className="text-red-500">
                                                      *
                                                    </span>
                                                  </label>
                                                  <input
                                                    className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-dark border-gray-200 dark:border-gray-700 text-primary dark:text-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue focus:border-transparent transition-colors"
                                                    placeholder="E.g., The name of your class"
                                                    maxLength={100}
                                                    required
                                                    type="text"
                                                    value={studySetName}
                                                    onChange={(e) => setStudySetName(e.target.value)}
                                                  />
                                                  <div className="text-xs text-gray-500 text-right mt-1">
                                                    {studySetName.length}/100 characters
                                                  </div>
                                                </div>
                                                <div className="space-y-2 hidden md:block">
                                                  <label className="block text-sm font-medium text-primary dark:text-gray-800">
                                                    Description{" "}
                                                    <span className="text-xs text-gray-500">
                                                      (Optional)
                                                    </span>
                                                  </label>
                                                  <textarea
                                                    className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-dark border-gray-200 dark:border-gray-700 text-primary dark:text-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue focus:border-transparent transition-colors resize-none"
                                                    placeholder="Add a description to help you remember what this study set is about..."
                                                    rows={4}
                                                    maxLength={500}
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                  />
                                                  <div className="text-xs text-gray-500 text-right mt-1">
                                                    {description.length}/500 characters
                                                  </div>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                        <div className="w-full lg:w-auto">
                                          <div className="lg:max-w-md">
                                            <div className="w-full rounded-2xl px-6 py-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                                              <div className="flex items-center md:items-start md:flex-col gap-2  mb-4">
                                                <img
                                                  alt="Sparke mascot"
                                                  loading="lazy"
                                                  width={60}
                                                  height={60}
                                                  decoding="async"
                                                  className="object-contain"
                                                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiM2Njg3RkYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CjxwYXRoIGQ9Ik0zMCAxNVY0NU0xNSA0NUg0NSIgc3Ryb2tlPSIjNjY4N0ZGIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4="
                                                  style={{
                                                    color: "transparent",
                                                  }}
                                                />
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                                  What is a study set?
                                                </h3>
                                              </div>
                                              <div className="space-y-3">
                                                <div className="flex items-start gap-3">
                                                  <div className="flex-shrink-0 mt-0.5">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={24}
                                                      height={24}
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      strokeWidth={2}
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      className="lucide lucide-graduation-cap w-5 h-5 text-blue"
                                                    >
                                                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                                                      <path d="M22 10v6" />
                                                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                                                    </svg>
                                                  </div>
                                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Organize your materials
                                                    into separate classes or
                                                    semesters.
                                                  </p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                  <div className="flex-shrink-0 mt-0.5">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={24}
                                                      height={24}
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      strokeWidth={2}
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      className="lucide lucide-folder w-5 h-5 text-purple"
                                                    >
                                                      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                                                    </svg>
                                                  </div>
                                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Keep all of a class's
                                                    materials in one place.
                                                  </p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                  <div className="flex-shrink-0 mt-0.5">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={24}
                                                      height={24}
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      strokeWidth={2}
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      className="lucide lucide-layers w-5 h-5 text-yellow"
                                                    >
                                                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
                                                      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
                                                      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
                                                    </svg>
                                                  </div>
                                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    You can make as many study
                                                    sets as you want.
                                                  </p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                  <div className="flex-shrink-0 mt-0.5">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={24}
                                                      height={24}
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      strokeWidth={2}
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      className="lucide lucide-trending-up w-5 h-5 text-green"
                                                    >
                                                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                                      <polyline points="16 7 22 7 22 13" />
                                                    </svg>
                                                  </div>
                                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Progress and insights are
                                                    personalized for each
                                                    Study Set you create.
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </main>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}