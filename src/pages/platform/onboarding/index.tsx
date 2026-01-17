import { Rocket, ChevronRight, Sparkles } from "lucide-react";
import logo from '../../../assets/logo.png';
import { Link } from "react-router-dom";


const StudyFetchLanding = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Content Section */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-24">
          <div className="max-w-xl w-full mx-auto">
            <div className="mb-12">
              <img
                alt="Edgio"
                className="h-10 md:h-12 w-auto"
                src={logo}
              />
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                <Sparkles className="size-4" />
                <span>Next Generation Learning</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] leading-tight">
                Welcome to <span className="text-blue-600">Edgio!</span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Transform your class materials into personalized study tools—notes, flashcards, practice tests, and more—in seconds. achieve your academic goals with ease.
              </p>

              <div className="pt-8">
                <Link to="/platform/language_selection" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                    <Rocket className="size-6" />
                    Get Started
                    <ChevronRight className="size-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Section */}
        <div className="hidden lg:flex flex-1 p-8">
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[40px] relative overflow-hidden flex items-center justify-center p-12">
            <div className="absolute inset-0 bg-blue-600/5 backdrop-blur-[2px]" />
            <img
              alt="Learning Interface"
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            />

            {/* Decorative elements */}
            <div className="absolute top-12 right-12 size-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-12 left-12 size-32 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyFetchLanding;
