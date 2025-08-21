import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RoleSelection() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [otherInput, setOtherInput] = useState("");
  const navigate = useNavigate();
  
  const options = [
    { id: 1, name: "TikTok", icon: "tiktok" },
    { id: 2, name: "Instagram", icon: "instagram" },
    { id: 3, name: "From a classmate", icon: "user" },
    { id: 4, name: "Reddit", icon: "reddit" },
    { id: 5, name: "Google Search", icon: "google" },
    { id: 6, name: "ChatGPT", icon: "chatgpt" },
    { id: 7, name: "YouTube", icon: "youtube" },
    { id: 8, name: "Facebook", icon: "facebook" },
    { id: 9, name: "News/article/blog", icon: "newspaper" },
    { id: 10, name: "From a professor", icon: "school" },
    { id: 11, name: "Fizz", icon: "fizz" },
    { id: 12, name: "Other", icon: "ellipsis" }
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    if (optionId !== 12) {
      setOtherInput("");
    }
  };

  const handleContinue = () => {
    // Handle the continue action here
    // You can access the selected option and otherInput if needed
    console.log("Selected option:", selectedOption);
    if (selectedOption === 12) {
      console.log("Other input:", otherInput);
    }
    // Navigate to the next page
    navigate("/platform/learning_goals");
  };

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "tiktok":
        return (
          <svg viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 md:w-6 md:h-6 flex-shrink-0">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.33 6.33 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" fill="#000" />
          </svg>
        );
      // ... (keep all other icon cases the same)
      default:
        return null;
    }
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
                              style={{ width: "36.3636%" }}
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
                              </div>
                              <div className="flex-1 overflow-y-auto pt-[72px] scrollbar:w-[5px]">
                                <div className="flex md:items-center justify-center min-h-full py-2 px-2 md:p-8">
                                  <div className="max-w-4xl w-full">
                                    <div className="text-center mb-8">
                                      <div className="flex justify-center md:mb-6">
                                        <img
                                          alt="Sparke curious sticker"
                                          loading="lazy"
                                          width={120}
                                          height={120}
                                          decoding="async"
                                          data-nimg={1}
                                          className="hidden md:block w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain"
                                          srcSet="/_next/image?url=https%3A%2F%2Fstudyfetchcdn.studyfetch.com%2Fstickers%2F33.png&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fstudyfetchcdn.studyfetch.com%2Fstickers%2F33.png&w=256&q=75 2x"
                                          src="/_next/image?url=https%3A%2F%2Fstudyfetchcdn.studyfetch.com%2Fstickers%2F33.png&w=256&q=75"
                                          style={{ color: "transparent" }}
                                        />
                                      </div>
                                      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                        How did you hear about StudyBuddy?
                                      </h1>
                                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                                        This helps us understand how to reach
                                        more students like you
                                      </p>
                                    </div>
                                    <div className="space-y-6">
                                      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {options.map((option) => (
                                          <button
                                            key={option.id}
                                            className={`flex items-center gap-3 px-2 lg:px-5 py-4 rounded-lg border transition-all duration-200 hover:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed ${
                                              selectedOption === option.id
                                                ? "border-blue bg-blue/5 text-blue"
                                                : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                                            }`}
                                            aria-label={option.name}
                                            onClick={() => handleOptionSelect(option.id)}
                                          >
                                            {getIconComponent(option.icon)}
                                            <span className="text-sm md:text-lg font-medium">
                                              {option.name}
                                            </span>
                                          </button>
                                        ))}
                                      </div>
                                      {selectedOption === 12 && (
                                        <div className="transition-opacity duration-300 ease-in-out opacity-100">
                                          <div className="space-y-2 pt-3 max-w-md mx-auto">
                                            <label
                                              htmlFor="other-source"
                                              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                            >
                                              Please specify how you heard about
                                              us
                                            </label>
                                            <div className="relative">
                                              <input
                                                id="other-source"
                                                placeholder="E.g., A friend told me, saw an ad..."
                                                className="w-full px-4 py-3 pr-12 rounded-lg border bg-white dark:bg-dark2 border-gray-200 dark:border-gray-700 text-primary dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue focus:border-transparent transition-colors"
                                                type="text"
                                                value={otherInput}
                                                onChange={(e) => setOtherInput(e.target.value)}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                      
                                      {/* Continue button */}
                                      {selectedOption && (
                                        <div className="flex justify-center pt-4">
                                         <button
                                          onClick={handleContinue}
                                          className="w-full max-w-md px-16 py-4 bg-blue-500 text-white font-semibold border-blue-600 rounded-lg hover:bg-blue-600 hover:border-blue-700 transition-all duration-200 shadow-md"
                                        >
                                          Continue
                                        </button>

                                        </div>
                                      )}
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