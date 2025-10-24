import React from "react";
import { UploadCloud, Rocket, ChevronRight, Sparkles } from "lucide-react";
import logo from '../../../assets/logo.png';
import { Link } from "react-router-dom";


const StudyFetchLanding = () => {
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
              data-panel-group
              data-panel-group-direction="horizontal"
              data-panel-group-id="«r4»"
              style={{
                display: "flex",
                flexDirection: "row",
                height: "100%",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <div
                className="flex flex-col h-full overflow-hidden md:border-r border-r-slate-100 dark:border-r-[#AB9FF2] dark:border-opacity-20 relative "
                data-panel
                data-panel-group-id="«r4»"
                data-panel-id="«r5»"
                data-panel-size={1.0}
                style={{ flex: "1 1 0px", overflow: "hidden" }}
              >
                <div className="h-full w-full flex flex-col overflow-y-auto relative">
                  <div className="overflow-y-auto w-full h-full flex flex-col">
                    <div>
                      <main className="w-full h-full overflow-y-auto dark:bg-dark">
                        <div className="w-full max-w-screen-2xl mx-auto relative">
                          <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 z-50">
                            <div
                              className="h-full bg-blue"
                              style={{ width: "7.69231%" }}
                            />
                          </div>
                          <div
                            className="min-h-screen"
                            style={{ opacity: 1, transform: "none" }}
                          >
                            <div className="min-h-screen flex w-full">
                              <div className="flex-1 flex items-center justify-between p-8 lg:p-12">
                                <div className="max-w-lg w-full">
                                  <div className="mb-12">
                                    <img
                                      alt="StudyFetch"
                                      loading="lazy"
                                      width={140}
                                      height={70}
                                      decoding="async"
                                      data-nimg={1}
                                      className="h-16 w-auto hidden dark:block"
                                      srcSet={logo}
                                      src={logo}
                                      style={{ color: "transparent" }}
                                    />
                                    <img
                                      alt="StudyFetch"
                                      loading="lazy"
                                      width={140}
                                      height={70}
                                      decoding="async"
                                      data-nimg={1}
                                      className="h-16 w-auto dark:hidden"
                                      srcSet={logo}
                                      src={logo}
                                      style={{ color: "transparent" }}
                                    />
                                  </div>
                                  <div className="flex flex-col gap-4">
                                    <h1 className="text-3xl font-semibold text-[#3c315b] dark:text-[#3c315b]">
                                      Welcome to Edgio!
                                    </h1>
                                    <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                                      Transform your class materials into
                                      personalized study tools—notes,
                                      flashcards, practice tests, and more—in
                                      seconds to get better grades.
                                    </p>
                                    <div className="pt-4">
                                      <Link to="/platform/language_selection">
                                           <button
                                                aria-busy="false"
                                                className="active:scale-95 active:bg-blue-600 px-4 py-2.5 text-[1rem] font-semibold min-h-[44px] group relative rounded-lg whitespace-nowrap transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-center select-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-blue-500 hover:bg-blue2 text-white border-0 inline-flex gap-2 justify-center items-center w-full"
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
                                                    className="lucide lucide-rocket w-6 h-6"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                                </svg>
                                                Get Started
                                                </button>
                                        </Link>

                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden lg:block flex-1 p-4">
                                <div className="w-full h-full bg-[#4A4560] rounded-lg relative flex flex-col items-center justify-center overflow-hidden max-h-[95vh] my-auto">
                                  <img
                                    alt="StudyFetch"
                                    loading="lazy"
                                    width={2000}
                                    height={2000}
                                    decoding="async"
                                    data-nimg={1}
                                    className="!w-full !h-full object-contain object-center"
                                    srcSet="/_next/image?url=%2Fplatform%2Fonboarding%2Fnew%2Fintroduction.png&w=2048&q=75 1x, /_next/image?url=%2Fplatform%2Fonboarding%2Fnew%2Fintroduction.png&w=3840&q=75 2x"
                                    src="/_next/image?url=%2Fplatform%2Fonboarding%2Fnew%2Fintroduction.png&w=3840&q=75"
                                    style={{ color: "transparent" }}
                                  />
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
};

export default StudyFetchLanding;
