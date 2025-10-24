import { useState, useEffect, useRef } from "react";
import { FileText, X, ChevronDown } from "lucide-react";

export default function PastQuestionsCard() {
  const [showModal, setShowModal] = useState(false);
  const [examType, setExamType] = useState("");
  const [course, setCourse] = useState("");
  const [school, setSchool] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [subjects, setSubjects] = useState([]);
  const [years, setYears] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [subjectsLoading, setSubjectsLoading] = useState(false);
  const [yearsLoading, setYearsLoading] = useState(false);
  const [questionsLoading, setQuestionsLoading] = useState(false);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const courseDropdownRef = useRef(null);
  const yearDropdownRef = useRef(null);

  const ACCESS_TOKEN = "ALOC-69ca0db7b90cc9ac4cac";

  // Fetch subjects from API
  useEffect(() => {
    const fetchSubjects = async () => {
      setSubjectsLoading(true);
      try {
        const response = await fetch("https://questions.aloc.com.ng/api/v2/q-subjects");
        const data = await response.json();
        
        if (data.status === 200 && data.subjects) {
          const subjectsArray = Object.values(data.subjects).map(subject => 
            subject.charAt(0).toUpperCase() + subject.slice(1)
          );
          setSubjects(subjectsArray);
        }
      } catch (error) {
        console.error("Error fetching subjects:", error);
      } finally {
        setSubjectsLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  // Fetch years when course is selected
  useEffect(() => {
    const fetchYears = async () => {
      if (!course) return;
      
      setYearsLoading(true);
      setYear(""); // Reset year when course changes
      try {
        const subjectSlug = course.toLowerCase();
        const response = await fetch(
          `https://questions.aloc.com.ng/api/v2/q-comprehension-years?subject=${subjectSlug}`,
          {
            headers: {
              'AccessToken': ACCESS_TOKEN,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }
        );
        
        const data = await response.json();
        
        if (data.status === 200 && data.data) {
          const yearsArray = data.data.map(item => item.examyear.toString());
          yearsArray.sort((a, b) => b - a);
          setYears(yearsArray);
        } else {
          console.error("Error fetching years:", data);
          setYears([]);
        }
      } catch (error) {
        console.error("Error fetching years:", error);
        setYears([]);
      } finally {
        setYearsLoading(false);
      }
    };

    fetchYears();
  }, [course]);

  // Fetch questions when download is initiated
  const fetchQuestions = async () => {
    if (!course || !year) return;
    
    setQuestionsLoading(true);
    try {
      const subjectSlug = course.toLowerCase();
      const response = await fetch(
        `https://questions.aloc.com.ng/api/v2/q/35?subject=${subjectSlug}&year=${year}&random=false`,
        {
          headers: {
            'AccessToken': ACCESS_TOKEN,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );
      
      const data = await response.json();
      
      if (data.status === 200) {
        if (Array.isArray(data.data)) {
          setQuestions(data.data);
        } else if (data.data) {
          setQuestions([data.data]);
        } else {
          setQuestions([]);
        }
        return data;
      } else {
        console.error("Error fetching questions:", data);
        setQuestions([]);
        return null;
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      setQuestions([]);
      return null;
    } finally {
      setQuestionsLoading(false);
    }
  };

  // Generate PDF with watermark using print method
  const generatePDF = (questionsData) => {
    // Create a hidden iframe for PDF generation
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${course} Past Questions - ${year}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 40px;
            line-height: 1.6;
            position: relative;
          }
          .watermark {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            font-size: 80px;
            color: rgba(0,0,0,0.1);
            pointer-events: none;
            z-index: -1;
            font-weight: bold;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #333;
            padding-bottom: 20px;
          }
          .question {
            margin-bottom: 30px;
            page-break-inside: avoid;
          }
          .question-number {
            font-weight: bold;
            margin-bottom: 10px;
          }
          .options {
            margin-left: 20px;
          }
          .option {
            margin-bottom: 5px;
          }
          .answer {
            background-color: #f0f8f0;
            padding: 10px;
            margin-top: 10px;
            border-left: 4px solid #4CAF50;
          }
          .section {
            font-style: italic;
            color: #666;
            margin-bottom: 10px;
          }
          @media print {
            body { margin: 20px; }
            .watermark { opacity: 0.3; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="watermark">edgio</div>
        
        <div class="header">
          <h1>${examType} Past Questions</h1>
          <h2>${course} - ${year}${school ? ` (${school})` : ''}</h2>
          <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>

        ${questionsData.map((question, index) => `
          <div class="question">
            <div class="question-number">Question ${index + 1}</div>
            ${question.section ? `<div class="section">${question.section}</div>` : ''}
            <div class="question-text">${question.question}</div>
            <div class="options">
              ${Object.entries(question.option || {}).map(([key, value]) => 
                value ? `<div class="option"><strong>${key.toUpperCase()}. </strong>${value}</div>` : ''
              ).join('')}
            </div>
            <div class="answer">
              <strong>Answer: ${question.answer?.toUpperCase() || 'N/A'}</strong>
              ${question.solution ? `<br><strong>Solution:</strong> ${question.solution}` : ''}
            </div>
          </div>
        `).join('')}

        <div class="no-print" style="text-align: center; margin-top: 40px;">
          <button onclick="window.print()" style="padding: 10px 20px; font-size: 16px; background: #CD2574; color: white; border: none; border-radius: 5px; cursor: pointer;">
            Print/Save as PDF
          </button>
          <p style="margin-top: 10px; color: #666;">Click the button above to print or save as PDF</p>
        </div>
      </body>
      </html>
    `;

    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(htmlContent);
    iframeDoc.close();

    // Wait for iframe to load then trigger print
    iframe.onload = () => {
      try {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
        
        // Clean up after printing
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 1000);
      } catch (error) {
        console.error("Error printing PDF:", error);
        document.body.removeChild(iframe);
        // Fallback: open in new tab
        const newWindow = window.open();
        newWindow?.document.write(htmlContent);
        newWindow?.document.close();
      }
    };
  };

  // Alternative PDF generation using blob
  const generatePDFBlob = (questionsData) => {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${course} Past Questions - ${year}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; position: relative; }
          .watermark { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-45deg); font-size: 80px; color: rgba(0,0,0,0.1); pointer-events: none; z-index: -1; font-weight: bold; }
          .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px; }
          .question { margin-bottom: 30px; page-break-inside: avoid; }
          .question-number { font-weight: bold; margin-bottom: 10px; }
          .options { margin-left: 20px; }
          .option { margin-bottom: 5px; }
          .answer { background-color: #f0f8f0; padding: 10px; margin-top: 10px; border-left: 4px solid #4CAF50; }
          .section { font-style: italic; color: #666; margin-bottom: 10px; }
          @media print { body { margin: 20px; } .watermark { opacity: 0.3; } }
        </style>
      </head>
      <body>
        <div class="watermark">edgio</div>
        <div class="header">
          <h1>${examType} Past Questions</h1>
          <h2>${course} - ${year}${school ? ` (${school})` : ''}</h2>
          <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
        ${questionsData.map((question, index) => `
          <div class="question">
            <div class="question-number">Question ${index + 1}</div>
            ${question.section ? `<div class="section">${question.section}</div>` : ''}
            <div class="question-text">${question.question}</div>
            <div class="options">
              ${Object.entries(question.option || {}).map(([key, value]) => 
                value ? `<div class="option"><strong>${key.toUpperCase()}. </strong>${value}</div>` : ''
              ).join('')}
            </div>
            <div class="answer">
              <strong>Answer: ${question.answer?.toUpperCase() || 'N/A'}</strong>
              ${question.solution ? `<br><strong>Solution:</strong> ${question.solution}` : ''}
            </div>
          </div>
        `).join('')}
      </body>
      </html>
    `;

    // Create blob and download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${course}_Past_Questions_${year}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownload = async () => {
    if (!year) {
      alert("Please select a year");
      return;
    }

    setLoading(true);
    setProgress(0);

    let current = 0;
    const progressInterval = setInterval(() => {
      current += 10;
      setProgress(current);
      if (current >= 90) {
        clearInterval(progressInterval);
      }
    }, 200);

    try {
      const questionsData = await fetchQuestions();
      
      if (questionsData && (questionsData.data || Array.isArray(questionsData.data))) {
        setProgress(100);
        
        setTimeout(() => {
          const questionsArray = Array.isArray(questionsData.data) ? questionsData.data : [questionsData.data];
          
          // Try the iframe method first, fallback to blob method
          try {
            generatePDF(questionsArray);
          } catch (error) {
            console.error("Iframe method failed, using blob method:", error);
            generatePDFBlob(questionsArray);
          }
          
          setTimeout(() => {
            setLoading(false);
            setShowModal(false);
            alert(
              `Download complete!\n\n${examType} past questions for ${course} (${year})${
                school ? " - " + school : ""
              }`
            );
          }, 2000);
        }, 500);
      } else {
        clearInterval(progressInterval);
        setLoading(false);
        alert("No questions found for the selected criteria. Please try different options.");
      }
    } catch (error) {
      clearInterval(progressInterval);
      setLoading(false);
      alert("Error downloading questions. Please try again.");
      console.error("Download error:", error);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (courseDropdownRef.current && !courseDropdownRef.current.contains(event.target)) {
        setShowCourseDropdown(false);
      }
      if (yearDropdownRef.current && !yearDropdownRef.current.contains(event.target)) {
        setShowYearDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      setShowModal(false);
    }
  };

  const handleCourseSelect = (subject) => {
    setCourse(subject);
    setShowCourseDropdown(false);
  };

  const handleYearSelect = (selectedYear) => {
    setYear(selectedYear);
    setShowYearDropdown(false);
  };

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setShowModal(true)}
        className="flex flex-col items-center justify-center w-full max-w-md h-64 border-2 border-dashed border-gray-400 rounded-2xl bg-white shadow-sm hover:shadow-md hover:border-orange-500 hover:bg-orange-50 transition-all cursor-pointer"
      >
        <FileText className="w-16 h-16 text-gray-600 mb-3" />
        <p className="text-gray-700 text-center text-base font-medium">
          Generate Past Questions
        </p>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          id="modal-overlay"
          onClick={handleOverlayClick}
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
        >
          <div className="relative bg-white rounded-2xl shadow-lg w-[90%] max-w-lg p-6">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-center">
              Generate Past Questions
            </h2>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-8">
                <p className="text-gray-700 mb-3">
                  {progress < 90 ? "Fetching questions..." : "Generating PDF..."}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-[#CD2574] to-[#E46708] h-3 rounded-full transition-all"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2 font-medium">
                  {progress}%
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleDownload();
                }}
                className="space-y-4"
              >
                {/* Exam Type */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Exam Type
                  </label>
                  <select
                    value={examType}
                    onChange={(e) => setExamType(e.target.value)}
                    className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none p-2"
                    required
                  >
                    <option value="">Select exam type</option>
                    <option value="Postume">Postume</option>
                    <option value="JAMB">JAMB</option>
                    <option value="WAEC">WAEC</option>
                    <option value="NECO">NECO</option>
                    <option value="NABTEB">NABTEB</option>
                    <option value="JUPEB">JUPEB</option>
                    <option value="Post Degree">Post Degree</option>
                  </select>
                </div>

                {/* Course - Custom Dropdown */}
                <div className="relative" ref={courseDropdownRef}>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Course / Subject
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowCourseDropdown(!showCourseDropdown)}
                    className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none p-2 text-left flex justify-between items-center bg-white"
                    disabled={subjectsLoading}
                  >
                    <span>{course || "Select course/subject"}</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </button>
                  
                  {showCourseDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {subjectsLoading ? (
                        <div className="p-3 text-center text-gray-500">
                          Loading subjects...
                        </div>
                      ) : (
                        subjects.map((subject, index) => (
                          <div
                            key={index}
                            onClick={() => handleCourseSelect(subject)}
                            className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer"
                          >
                            <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-green-500 flex-shrink-0">
                              <circle r={3} cx={3} cy={3} />
                            </svg>
                            <span>{subject}</span>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>

                {/* Year - Custom Dropdown */}
                {course && (
                  <div className="relative" ref={yearDropdownRef}>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Year
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowYearDropdown(!showYearDropdown)}
                      className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none p-2 text-left flex justify-between items-center bg-white"
                      disabled={yearsLoading || !course}
                    >
                      <span>
                        {yearsLoading ? "Loading years..." : year || "Select year"}
                      </span>
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </button>
                    
                    {showYearDropdown && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {yearsLoading ? (
                          <div className="p-3 text-center text-gray-500">
                            Loading available years...
                          </div>
                        ) : years.length === 0 ? (
                          <div className="p-3 text-center text-gray-500">
                            No years available for {course}
                          </div>
                        ) : (
                          years.map((yearItem, index) => (
                            <div
                              key={index}
                              onClick={() => handleYearSelect(yearItem)}
                              className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer"
                            >
                              <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-blue-500 flex-shrink-0">
                                <circle r={3} cx={3} cy={3} />
                              </svg>
                              <span>{yearItem}</span>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                    {years.length > 0 && !yearsLoading && (
                      <p className="text-xs text-gray-500 mt-1">
                        {years.length} year(s) available for {course}
                      </p>
                    )}
                  </div>
                )}

                {/* School (only for Postume) */}
                {examType === "Postume" && (
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      School
                    </label>
                    <select
                      value={school}
                      onChange={(e) => setSchool(e.target.value)}
                      className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none p-2"
                      required
                    >
                      <option value="">Select school</option>
                      <option value="DELSU">DELSU</option>
                    </select>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!course || !year || questionsLoading}
                  className="w-full bg-gradient-to-r from-[#CD2574] to-[#E46708] text-white py-2 rounded-full hover:from-[#E46708] hover:to-[#CD2574] transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {questionsLoading ? "Fetching Questions..." : "Download PDF"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}