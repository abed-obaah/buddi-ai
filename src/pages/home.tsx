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

export default function Example() {
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
      <header className="fixed top-0 z-[500] w-full bg-gradient-to-r from-gray-100/50 via-gray-100/50 to-gray-100/50 backdrop-blur-md supports-[backdrop-filter]:bg-white/3">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-[160px]">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={logo}
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          {/* <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div> */}
               <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
                {/* <Link to="/auth/signup" className="text-sm font-semibold text-gray-900">
                      <a className="text-sm font-semibold text-gray-900">
                        Log in
                      </a>
                </Link> */}
                    
                    <button
                     onClick={() => setIsOpenModal(true)}
                            type="button"
                            className="text-50 font-500 text-[#404040] inline-flex items-center justify-center rounded-[13px] bg-gray-200 px-4 py-2 shadow-xs duration-300 ease-in hover:bg-black hover:text-white md:ml-4"
                        >
                           {/* Sign Up */}
                           Join The waitlist
                        </button>
                    </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                 src={logo}
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                   {/* <a href="/auth/signup" className="text-sm font-semibold text-gray-900">
    Log in <span aria-hidden="true">&rarr;</span>
  </a>
   <button
        type="button"
        className="rounded-md bg-[#666666] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-[#666666]"
      >
        Button text
      </button> */}
        <button
         onClick={() => setIsOpenModal(true)}
                            type="button"
                            className="text-50 font-500 text-[#404040] inline-flex items-center justify-center rounded-[13px] bg-gray-200 px-4 py-2 shadow-xs duration-300 ease-in hover:bg-black hover:text-white md:ml-4"
                        >
                           {/* Sign Up */}
                           Join The waitlist
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
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40"
          onClick={() => setIsOpenModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md mx-auto text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-3">Join Our Waitlist</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Be the first to know when <strong>StudyBuddy</strong> launches! Sign up below.
            </p>

            {/* Waitlist Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="focus:ring-opacity-20 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm transition-colors outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="focus:ring-opacity-20 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm transition-colors outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="inline-block rounded-full bg-gradient-to-r from-[#CD2574] to-[#E46708] w-full py-4 font-medium text-white shadow-sm hover:from-[#E46708] hover:to-[#CD2574] focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none text-lg"
              >
                {loading ? "Joining..." : "Join Waitlist"}
              </button>
            </form>
          </div>
        </div>
      )}

                       <section className="pt-40">
  <div className="container mx-auto px-4 ">
    <div className="flex justify-center">
      <div className="relative rounded-[50px] bg-white p-8 lg:py-16 w-full max-w-[1500px]">
        <div className="mx-auto max-w-[850px] py-20">
        <div className="flex flex-col items-center text-center">
          {/* <h1 className="text-600 font-500 mb-4 leading-[1.3] text-black md:leading-[1.1] lg:text-[3rem]">
            Events Worth Your Time With{" "}
            <span className="font-700 text-left text-black">Centrl</span>
          </h1> */}
          <h1 className="text-6xl font-semibold tracking-tight text-balance text-[#000000] sm:text-8xl mb-6">
        Study{' '}
        <span className="typewriter-text">
          {text}
          <span className="cursor text-md">|</span>
        </span>
      </h1>
          <p className=" text-lg text-black max-w-2xl">
            Achieve your academic goals with learning paths,interactive
          </p>
          <p className="mb-8 text-lg text-black max-w-2xl">
             content, and real-time feedback with Edgio
          </p>
          <a
            className="inline-block rounded-full bg-gradient-to-r from-[#CD2574] to-[#E46708] px-12 py-4 font-medium text-[white] shadow-sm hover:from-[#E46708] hover:to-[#CD2574] focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none text-lg"
            href="/auth/signin"
          >
            Get Started
          </a>
        </div>
      </div>
        <img
          alt="Star Icon"
          loading="lazy"
          width={50}
          height={50}
          decoding="async"
          data-nimg={1}
          className="absolute right-4 bottom-4"
          src={AI}
          style={{ color: "transparent" }}
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
