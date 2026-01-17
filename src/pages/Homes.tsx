'use client'

import { useState,useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'
import BuddyUI from '../components/BuddyUI'
import ToggleSwitch from '../components/ToggleSwitch';
import GetStarted from '../components/GetStarted';
import StudentCards from '../components/studentCard';
import TeacherCards from '../components/TeacherCard';
import WhyChooseUs from '../components/WhyChooseUs';
import AchievementStats from '../components/AchievementStats';
import Pricing from '../components/Pricing';
import { Link } from "react-router-dom";
import AI from "../assets/bot.png"
import confetti from "canvas-confetti";
import emailjs from "emailjs-com";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase
const supabaseUrl = "https://fnpuflgnxrjxdfgmmihx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZucHVmbGdueHJqeGRmZ21taWh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwMzQ0MzUsImV4cCI6MjA3NTYxMDQzNX0.-fSXX6rNb98pXDkM3kDtR6hp_sJN1mDmYpCH-UIbMxg";
const supabase = createClient(supabaseUrl, supabaseKey);



const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Smart.', 'Efficient.', 'Effective.', 'Smarter.'];
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 15 : 120);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);
   const [selected, setSelected] = useState('tutor');
 const [isOpenModal, setIsOpenModal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);

 const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Please enter both name and email.");
      return;
    }

    setLoading(true);

    try {
      // Save to Supabase
      const { error } = await supabase.from("waitlist").insert([
        { name: form.name, email: form.email },
      ]);
      if (error) throw error;

      // Send confirmation email via EmailJS
      await emailjs.send(
        "service_xpie5pp", // ✅ your EmailJS service ID
        "template_motldec", // ✅ your EmailJS template ID
        {
          to_name: form.name,
          to_email: form.email,
          user_email: form.email, // ✅ ensure both exist for compatibility
          message: `Hey ${form.name}, thanks for joining the StudyBuddy waitlist! 🎓`,
        },
        "P5lO1YJKh0A3KdxPL" // ✅ your EmailJS public key
      );

      // 🎉 Confetti
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });

      // ✅ Success feedback
      // alert("🎉 You're on the waitlist! Check your email for confirmation.");

      // Close modal and reset form
      setIsOpenModal(false);
      setForm({ name: "", email: "" });
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="bg-[#f2f5f8]">
      <header className="fixed top-0 z-[500] w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav aria-label="Global" className="flex items-center justify-between p-4 md:p-6 lg:px-[120px]">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Logo"
                src={logo}
                className="h-8 md:h-10 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
            <button
              onClick={() => setIsOpenModal(true)}
              type="button"
              className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
              Join The Waitlist
            </button>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Logo"
                  src={logo}
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-4 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <button
                    onClick={() => {
                      setIsOpenModal(true);
                      setMobileMenuOpen(false);
                    }}
                    type="button"
                    className="w-full px-6 py-3 text-base font-semibold text-white bg-black rounded-xl shadow-lg hover:bg-gray-800 transition-all"
                  >
                    Join The Waitlist
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Modal Overlay */}
      {isOpenModal && (
        <div
          className="fixed inset-0 z-[600] flex items-center justify-center p-4"
          onClick={() => setIsOpenModal(false)}
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-md relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpenModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
            >
              <XMarkIcon className="size-5" />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Join Our Waitlist</h2>
              <p className="text-gray-500 text-sm md:text-base">
                Be the first to know when <strong>StudyBuddy</strong> launches!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm transition-all outline-none focus:border-black focus:ring-4 focus:ring-black/5"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm transition-all outline-none focus:border-black focus:ring-4 focus:ring-black/5"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-[#CD2574] to-[#E46708] py-4 font-bold text-white shadow-xl shadow-orange-500/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-70 disabled:hover:scale-100 text-lg"
              >
                {loading ? "Joining..." : "Join Waitlist"}
              </button>
            </form>
          </div>
        </div>
      )}

      <section className="pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center">
            <div className="relative rounded-[32px] md:rounded-[50px] bg-white p-6 md:p-12 lg:py-20 w-full max-w-7xl shadow-xl shadow-gray-200/50">
              <div className="mx-auto max-w-4xl text-center py-10 md:py-16">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
                  Study{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CD2574] to-[#E46708]">
                    {text}
                  </span>
                  <span className="animate-pulse ml-1">|</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
                  Achieve your academic goals with learning paths, interactive content, and real-time feedback with Edgio.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    className="w-full sm:w-auto inline-block rounded-full bg-gradient-to-r from-[#CD2574] to-[#E46708] px-10 py-4 font-bold text-white shadow-lg shadow-orange-500/25 hover:scale-105 active:scale-95 transition-all text-lg"
                    href="/auth/signin"
                  >
                    Get Started
                  </a>
                  <button
                    onClick={() => setIsOpenModal(true)}
                    className="w-full sm:w-auto px-10 py-4 font-semibold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-all text-lg"
                  >
                    Watch Demo
                  </button>
                </div>
              </div>
              <img
                alt="AI bot"
                loading="lazy"
                width={80}
                height={80}
                className="absolute -right-4 -bottom-4 md:right-8 md:bottom-8 w-16 h-16 md:w-24 md:h-24 drop-shadow-2xl animate-bounce-slow"
                src={AI}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          {/* <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#666666] to-[#666666] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          /> */}
        </div>
{/*   
        <div className="6">
         
         
           <BuddyUI/>
            
            <GetStarted />
        </div> */}

        <div className="flex justify-center my-10">
            <ToggleSwitch  selected={selected} onChange={setSelected} />
          </div>
          

         <div className="max-w-7xl mx-auto">
        {/* Toggle section */}
        {selected === 'student' ? <StudentCards /> : <TeacherCards />}
        
        {/* WhyChooseUs component */}
        <WhyChooseUs />
      </div>
         
          <AchievementStats />
          <Pricing />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          {/* <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          /> */}
        </div>
      </div>
    </div>
  )
}
