'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  AcademicCapIcon,
  ShareIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid'
import { CheckCircleIcon, ClockIcon, ArrowUpTrayIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import panda from '../../../assets/panda.png'

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export default function DashboardContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    // Check if speech recognition is supported
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setSpeechSupported(false);
    } else {
      // Initialize speech recognition
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false; // FIXED: Removed the duplicate typo
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setMessage(prev => prev + ' ' + transcript);
        
        // Check if the transcript contains greetings directed at Joya
        const lowerTranscript = transcript.toLowerCase();
        if (lowerTranscript.includes('hi joya') || 
            lowerTranscript.includes('hello joya') || 
            lowerTranscript.includes('hey joya') ||
            lowerTranscript.includes('hiya joya')) {
          
          // Auto-submit after a short delay to make it feel natural
          setTimeout(() => {
            handleVoiceGreeting(transcript);
          }, 500);
        }
        
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const startListening = () => {
    if (!speechSupported) {
      alert('Speech recognition is not supported in your browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    if (recognitionRef.current) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleVoiceGreeting = async (transcript: string) => {
    // Add user's voice message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: transcript,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      // Special response for Joya greetings
      const joyaGreetingResponses = [
        "Hello there! It's wonderful to hear your voice! How can I assist with your learning today?",
        "Hi! I'm so glad you said hello! What would you like to learn about?",
        "Hey! It's great to talk with you directly. I'm here and ready to help you learn!",
        "Hello! I love when students reach out by voice. What's on your mind today?",
        "Hi! Hearing your voice makes this feel so much more personal. How can I support your educational journey?"
      ];
      
      const aiResponse = joyaGreetingResponses[Math.floor(Math.random() * joyaGreetingResponses.length)];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      
      // Auto-speak the response
      setTimeout(() => {
        speakText(aiResponse);
      }, 1000);
      
    } catch (error) {
      console.error('Error getting AI response:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble responding right now. Please try again in a moment.",
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      
      // Stop any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in your browser.');
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const simulateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const responses = {
      greeting: [
        "Hello! I'm Joya, your AI learning assistant. How can I help you with your studies today?",
        "Hi there! I'm excited to help you learn. What would you like to explore?",
        "Welcome! I'm Joya, ready to assist with your educational journey. What's on your mind?"
      ],
      explain: [
        "I'd be happy to explain that concept! Could you provide more specific details about what you'd like me to clarify?",
        "That's a great topic! Let me break it down for you in simple terms.",
        "I can definitely help explain that. Here's a comprehensive overview..."
      ],
      summarize: [
        "I can help summarize that content for you. Please share the material you'd like me to condense.",
        "Summarization is one of my strengths! I'll extract the key points and main ideas for you.",
        "Let me create a concise summary highlighting the most important information."
      ],
      citations: [
        "I can help you find relevant academic citations for your research. What specific topic are you working on?",
        "Finding credible sources is crucial! Let me search through academic databases for you.",
        "I'll help you locate proper citations and references for your academic work."
      ],
      study: [
        "I can suggest effective study techniques based on proven learning strategies. What subject are you studying?",
        "Let me share some powerful study methods that can improve your retention and understanding.",
        "Based on cognitive science principles, here are some study techniques that might work well for you..."
      ],
      default: [
        "That's an interesting question! As your learning assistant, I can help explain concepts, summarize materials, find citations, or suggest study techniques. Which would you like to explore?",
        "I'm here to support your learning journey! I can assist with explanations, summaries, research, or study strategies. How can I help you specifically?",
        "Great question! I'd love to help you learn more effectively. Could you tell me what specific area you'd like assistance with?"
      ]
    };

    const lowerMessage = userMessage.toLowerCase();
    
    // Check for Joya-specific greetings in typed messages too
    if (lowerMessage.includes('hi joya') || lowerMessage.includes('hello joya') || lowerMessage.includes('hey joya')) {
      return "Hello! It's great to hear from you! How can I assist with your learning journey today?";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
    } else if (lowerMessage.includes('explain') || lowerMessage.includes('what is') || lowerMessage.includes('how does')) {
      return responses.explain[Math.floor(Math.random() * responses.explain.length)];
    } else if (lowerMessage.includes('summar') || lowerMessage.includes('brief') || lowerMessage.includes('overview')) {
      return responses.summarize[Math.floor(Math.random() * responses.summarize.length)];
    } else if (lowerMessage.includes('citation') || lowerMessage.includes('source') || lowerMessage.includes('reference')) {
      return responses.citations[Math.floor(Math.random() * responses.citations.length)];
    } else if (lowerMessage.includes('study') || lowerMessage.includes('learn') || lowerMessage.includes('technique')) {
      return responses.study[Math.floor(Math.random() * responses.study.length)];
    } else {
      return responses.default[Math.floor(Math.random() * responses.default.length)];
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      // Simulate AI response
      const aiResponse = await simulateAIResponse(message);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble responding right now. Please try again in a moment.",
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (action: string) => {
    const quickMessage = action;
    setMessage(quickMessage);
    // Auto-submit after a brief delay to show the user what's happening
    setTimeout(() => {
      const submitEvent = new Event('submit', { cancelable: true });
      const form = document.querySelector('form');
      if (form) {
        form.dispatchEvent(submitEvent);
      }
    }, 100);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row overflow-hidden bg-white dark:bg-dark">
        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Chat content */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto w-full">
              {/* Chat messages area */}
              <div className="mb-6 min-h-[400px] max-h-[60vh] overflow-y-auto">
                {messages.length === 0 ? (
                  // Welcome screen - only show when no messages
                  <div className="text-center mb-6">
                    <div className="flex justify-center">
                      <img
                        alt="Spark.E"
                        loading="lazy"
                        width={250}
                        height={250}
                        decoding="async"
                        className="w-60 h-60 md:w-72 md:h-72"
                        src={panda}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center py-1 gap-2 mt-2">
                      <div className="flex flex-wrap justify-center gap-2">
                        <button className="group flex items-center gap-2 bg-[#F5F2FF] dark:bg-dark2 rounded-md px-3 py-1.5 text-xs md:text-sm text-primary dark:text-black hover:bg-purple transition-all duration-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="group-hover:animate-jiggle"
                          >
                            <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                            <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                            <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                            <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                          </svg>
                          Personalities & Skillsets
                        </button>
                        <button className="group flex items-center gap-2 bg-[#F5F2FF] dark:bg-dark2 hover:bg-purple rounded-md px-3 py-1.5 text-xs md:text-sm text-primary dark:text-black transition-all duration-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="group-hover:animate-jiggle"
                          >
                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                            <path d="M20 3v4" />
                            <path d="M22 5h-4" />
                            <path d="M4 17v2" />
                            <path d="M5 18H3" />
                          </svg>
                          Scenarios
                        </button>
                      </div>
                    </div>
                    <h2 className="text-lg font-bold text-gray-800 dark:text-gray-600 mt-4">
                      Hi, I'm Joya
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-500 mb-4">
                      Ask me anything about learning, or try one of these examples. You can also say "Hi Joya"!
                    </p>
                    <div className="flex flex-wrap justify-center gap-1.5 w-full max-w-2xl mx-auto">
                      <button 
                        onClick={() => handleQuickAction("Explain quantum physics")}
                        className="px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 bg-gray-50 text-gray-600 dark:bg-dark2/60 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-dark2 border border-gray-200 dark:border-gray-700/50"
                      >
                        Explain Concepts
                      </button>
                      <button 
                        onClick={() => handleQuickAction("Summarize the key points of machine learning")}
                        className="px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 bg-gray-50 text-gray-600 dark:bg-dark2/60 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-dark2 border border-gray-200 dark:border-gray-700/50"
                      >
                        Summarize
                      </button>
                      <button 
                        onClick={() => handleQuickAction("Find citations about climate change")}
                        className="px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 bg-gray-50 text-gray-600 dark:bg-dark2/60 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-dark2 border border-gray-200 dark:border-gray-700/50"
                      >
                        Find Citations
                      </button>
                      <button 
                        onClick={() => handleQuickAction("What are effective study techniques?")}
                        className="px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 bg-gray-50 text-gray-600 dark:bg-dark2/60 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-dark2 border border-gray-200 dark:border-gray-700/50"
                      >
                        Study Techniques
                      </button>
                    </div>
                  </div>
                ) : (
                  // Chat messages
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                            msg.isUser
                              ? 'bg-blue-500 text-white rounded-br-none'
                              : 'bg-gray-100 dark:bg-dark2 text-black dark:text-gray-600 rounded-bl-none'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm whitespace-pre-wrap flex-1">{msg.content}</p>
                            {!msg.isUser && (
                              <button
                                onClick={() => isSpeaking ? stopSpeaking() : speakText(msg.content)}
                                className={`flex-shrink-0 p-1 rounded-full transition-colors ${
                                  isSpeaking ? 'bg-red-100 text-red-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                }`}
                                title={isSpeaking ? 'Stop speaking' : 'Read aloud'}
                              >
                                {isSpeaking ? (
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                  </svg>
                                ) : (
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.784L4.925 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.925l3.458-2.784a1 1 0 011.617.784zm5.274 4.21a1 1 0 011.414 0 5 5 0 010 7.072 1 1 0 11-1.414-1.414 3 3 0 000-4.244 1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                )}
                              </button>
                            )}
                          </div>
                          <p className={`text-xs mt-1 ${msg.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="max-w-[80%] rounded-2xl rounded-bl-none bg-gray-100 dark:bg-dark2 px-4 py-2">
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>

              {/* Input area */}
              <div className="mt-8">
                <form onSubmit={handleSubmit} className="w-full">
                  <div className="flex flex-col bg-white dark:bg-dark2 border border-gray-300 dark:border-[#2D2D2D] rounded-2xl">
                    <div className="flex items-center">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1 p-3 text-sm dark:text-black text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none resize-none max-h-32 min-h-[44px]"
                        placeholder='Ask your AI tutor anything or say "Hi Joya"...'
                        style={{ height: '45px' }}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e);
                          }
                        }}
                      />
                      
                      {/* Voice input button */}
                      <button
                        type="button"
                        onClick={isListening ? stopListening : startListening}
                        className={`mr-2 p-2 rounded-full transition-colors duration-200 ${
                          isListening 
                            ? 'bg-red-500 text-white animate-pulse' 
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        } ${!speechSupported ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!speechSupported}
                        title={isListening ? 'Stop listening' : 'Start voice input'}
                      >
                        {isListening ? (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>

                      {/* Send button - shows when user types */}
                      {message.trim() ? (
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="flex items-center justify-center mr-2 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <PaperAirplaneIcon className="w-4 h-4 transform rotate-45" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="flex items-center justify-center mr-2 p-1 rounded-full bg-gray-300 text-gray-500 cursor-not-allowed transition-colors duration-200 ease-in-out"
                          disabled
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m5 12 7-7 7 7" />
                            <path d="M12 19V5" />
                          </svg>
                        </button>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center p-2 pt-0 gap-2">
                      <label
                        htmlFor="file-input"
                        className="p-1 cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-400"
                        >
                          <rect
                            width={18}
                            height={18}
                            x={3}
                            y={3}
                            rx={2}
                            ry={2}
                          />
                          <circle cx={9} cy={9} r={2} />
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                      </label>
                      <input
                        id="file-input"
                        className="hidden"
                        multiple
                        accept="image/*,application/pdf"
                        type="file"
                      />
                      
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="hidden md:block"
                          >
                            <circle cx={12} cy={12} r={10} />
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                            <path d="M2 12h20" />
                          </svg>
                          <span>Web Browsing</span>
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="hidden md:block"
                          >
                            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                            <path d="M22 10v6" />
                            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                          </svg>
                          <span>Search Academic Papers</span>
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 inset-ring inset-ring-red-600/10"
                        >
                          <span>Using 0 material(s)</span>
                          <span className="text-blue text-[.6rem]">Select Materials</span>
                        </button>
                      </div>
                      
                      {/* Voice status indicator */}
                      {(isListening || isSpeaking) && (
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <div className={`w-2 h-2 rounded-full ${isListening ? 'bg-red-500 animate-pulse' : 'bg-blue-500'}`}></div>
                          <span>{isListening ? 'Listening...' : 'Speaking...'}</span>
                        </div>
                      )}
                      
                      <button
                        className="p-1 rounded-md transition-all ease-in-out duration-200 hover:bg-gray-100 dark:hover:bg-dark2 ml-auto"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1={2} x2={22} y1={2} y2={22} />
                          <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
                          <path d="M5 10v2a7 7 0 0 0 12 5" />
                          <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
                          <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
                          <line x1={12} x2={12} y1={19} y2={22} />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}