// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/auth/signup';
import Onboarding from './pages/platform/onboarding';
import LanguageSelector from './pages/platform/onboarding/LanguageSelector';
import Role from './pages/platform/onboarding/RoleSelection';
import HowYouHeard from './pages/platform/onboarding/howYouHeard';
import LearningGoals from './pages/platform/onboarding/learning_goals';
import SupportGoals from './pages/platform/onboarding/goals_support';
import StudySet from './pages/platform/onboarding/creation_start';
import Upload from './pages/platform/onboarding/upload'
import Dashboard from './pages/platform/dashboard/dashboard'
// import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/auth/signup" element={<SignUp/>} />
      <Route path="/platform/onboarding" element={<Onboarding/>} />
      <Route path="/platform/language_selection" element={<LanguageSelector/>} />
      <Route path="/platform/Role" element={<Role />} />
      <Route path="/platform/how_you_heard" element={<HowYouHeard />} />
      <Route path="/platform/learning_goals" element={<LearningGoals />} />
      <Route path="/platform/goals_support" element={<SupportGoals />} />
      <Route path="/platform/study_set" element={<StudySet />} />
      <Route path="/platform/upload" element={<Upload />} />
      <Route path="/platform/upload" element={<Upload />} />
      <Route path="/platform/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
