"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import img from '../../public/avatar1-modified.png';
import { PiMoonStarsBold } from "react-icons/pi";
import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { FaGithub, FaJava } from "react-icons/fa6";
import { MdEventSeat, MdAirplaneTicket } from "react-icons/md";
import { PiChatsCircleBold } from "react-icons/pi";
import { SlNote } from "react-icons/sl";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GrCloudComputer } from "react-icons/gr";
import { LuNotebookText } from "react-icons/lu";
import cert1 from "../../public/javaCerti.png";
import cert2 from "../../public/AndroidCertificate.jpg";
import cert3 from  "../../public/deanLetter.png";
import { FaAward } from "react-icons/fa";
import { MdOutlineAddBusiness } from "react-icons/md";
import Link from "next/link";
import capstone from "./managex-capstone/page";



export default function Home() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open and close the modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  // Certificate data
   const certificates = [
     {
       id: 1,
       title:"Java Programming",
       description: "Fundamental of java Programming by BOORD Academy",
        image: cert1,
         },
         {
           id: 2,
           title: "Android Development",
            description: "Android App Development Master Course with Java by Oak Academy",
            image: cert2,
         },
          {
              id: 3,
              title: "Dean's Honour Letter ",
     description: "Earnes dean's letter by Achieving grade point 3.5 or higher.",
      image: cert3,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 text-black dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen" data-aos="fade-up">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl cursor-not-allowed">Param Patel</h1>
            <ul className="flex items-center">
              <li><PiMoonStarsBold onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" /></li>
              <li>
              <div>
      {/* Trigger button for modal */}
      <a
        className="text-black px-4 py-2 rounded-md ml-8 hover:text-white bg-gradient-to-l from-slate-700 to-cyan-700 dark:text-white"
        href="#"
        onClick={toggleModal} // Open the modal on click
      >
        Download Document
      </a>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-80 max-w-xs text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Choose a file to download</h2>
            <div className="space-y-4">
              <button
                onClick={() => {
                  window.location.href = "/ParamPatel.docx"; // Direct download for resume
                  toggleModal(); // Close the modal
                }}
                className="w-full py-2 bg-gradient-to-r from-slate-700 to-cyan-700 text-white rounded-md hover:bg-gradient-to-l"
              >
                Download Resume
              </button>
              <button
                onClick={() => {
                  window.location.href = "/CoverLetter-Param.docx"; // Direct download for cover letter
                  toggleModal(); // Close the modal
                }}
                className="w-full py-2 bg-gradient-to-r from-slate-700 to-cyan-700 text-white rounded-md hover:bg-gradient-to-l"
              >
                Download Cover Letter
              </button>
              <button
                onClick={toggleModal} // Close the modal
                className="w-full py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
</li>
              <li><a href="#skills" className="text-l text-black p-2 rounded-md ml-8 dark:text-white">Skills</a></li>
              <li><a href="#projects" className="text-l text-black p-2 rounded-md ml-8 dark:text-white">Projects</a></li>
              <li><a href="#socials" className="text-l text-black p-2 rounded-md ml-8 dark:text-white">Socials</a></li>
              <li><a href="#certificates" className="text-l text-black p-2 rounded-md ml-8 dark:text-white">Certificates and Achievments</a></li>

            </ul>
          </nav>

          <div className="relative flex justify-center mt-20 mx-auto" data-aos="fade-up">
            <Image alt="Avatar" src={img} className="h-60 w-60" />
          </div>

          <div className="text-center p-10 justify-center font-lora" data-aos="fade-up">
            <h1 className="font-lora text-9xl py-2 font-medium bg-gradient-to-r from-slate-700 to-cyan-700 inline-block text-transparent bg-clip-text sm:text-9xl dark:from-slate-300 dark:to-cyan-500">Param Patel</h1>
            <h3 className="font-lora text-5xl py-2">Junior Software Developer</h3>
            <div className="max-w-3xl mx-auto px-4">
            <p className="font-lora text-3xl py-5 leading-10 text-gray-800 dark:text-white">
              Passionate software engineer and a last year student in Computer Programming and Analysis skilled in mobile app design, spring boot Frameworks, database management and knows basics of full-stack development. Dedicated to solving complex problems with clean and efficient code.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-5 text-lg leading-relaxed">
            Technology is more than just lines of code; it’s a medium for innovation, problem-solving, and impact. As a software developer, I believe in the power of technology to simplify complexities, enhance experiences, and transform ideas into reality. My journey began with a curiosity for how things work, evolved into a passion for software development, and continues as a drive to build meaningful, scalable solutions.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-3 text-lg leading-relaxed">
            Above all, I believe in continuous learning, adaptability, and collaboration. Technology evolves rapidly, and so must we. I’m committed to refining my skills, embracing challenges, and making a lasting impact in the tech industry.
          </p>
          </div>
          </div>
        </section>
        <section id="skills" className="mt-20 p-10 text-center" data-aos="fade-up">
  <h3 className="text-4xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 inline-block text-transparent bg-clip-text">
    My Skills
  </h3>
  <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">
    Technologies and tools I am proficient in.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
    
    {/* Programming and Frameworks */}
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      <GrCloudComputer className="text-6xl text-gray-700 dark:text-gray-300 mx-auto" />
      <h4 className="text-2xl font-semibold text-center mt-4">Programming & Frameworks</h4>
      <ul className="list-disc pl-6 mt-3 text-gray-500 dark:text-gray-300">
        <li>Java, C#, JavaScript, Python - Writing clean, efficient code.</li>
        <li>Spring Boot & ASP.NET - Microservices and enterprise-grade applications.</li>
        <li>Android Development - Java & Kotlin for mobile apps.</li>
        <li>React & Next.js - Frontend development.</li>
      </ul>
    </div>
    
    {/* Databases */}
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      <SlNote className="text-6xl text-gray-700 dark:text-gray-300 mx-auto" />
      <h4 className="text-2xl font-semibold text-center mt-4">Databases</h4>
      <ul className="list-disc pl-6 mt-3 text-gray-500 dark:text-gray-300">
        <li>SQL Databases: MySQL, PostgreSQL</li>
        <li>NoSQL: Firebase Realtime Database, MongoDB</li>
        <li>Optimized database design and performance tuning.</li>
      </ul>
    </div>

    {/* DevOps & Tools */}
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      <GrCloudComputer className="text-6xl text-gray-700 dark:text-gray-300 mx-auto" />
      <h4 className="text-2xl font-semibold text-center mt-4">DevOps & Tools</h4>
      <ul className="list-disc pl-6 mt-3 text-gray-500 dark:text-gray-300">
        <li>Docker & Kubernetes - Containerization & orchestration.</li>
        <li>Git & GitHub - Version control and CI/CD workflows.</li>
        <li>Jenkins - Automating builds and deployments.</li>
      </ul>
    </div>

    {/* Cloud Computing */}
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      <TiWeatherPartlySunny className="text-6xl text-gray-700 dark:text-gray-300 mx-auto" />
      <h4 className="text-2xl font-semibold text-center mt-4">Cloud Computing</h4>
      <ul className="list-disc pl-6 mt-3 text-gray-500 dark:text-gray-300">
        <li>Experience with AWS, Firebase, and Azure.</li>
        <li>Deploying scalable cloud-based applications.</li>
        <li>Serverless computing and cloud security.</li>
      </ul>
    </div>

  </div>
</section>


        <section id="projects" className="mt-20 p-5 text-center " data-aos="fade-up" >
        <h3 className="text-4xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 inline-block text-transparent bg-clip-text">
    My Projects
  </h3>
  <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg ">
    The projects I worked on.
  </p>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">

  <Link href="/managex-capstone">
      <div className="cursor-pointer bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
        <MdOutlineAddBusiness className="text-5xl text-gray-700 dark:text-gray-300 mx-auto" />
        <h4 className="text-2xl font-semibold text-center mt-4">ManageX(Capstone)-Click here.</h4>
        <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
          An Android application for small business owners to manage POS systems, inventory tracking, and employee data.
        </p>
        <ul className="list-disc pl-6 mt-3 text-gray-500 dark:text-gray-300">
          <li>Dynamic POS system with customizable sections and items.</li>
          <li>Employee management with time tracking and payroll integration.</li>
          <li>Real-time inventory updates and analytics.</li>
          <li>Built with: <strong>Java, Firebase, Android Studio</strong></li>
        </ul>
      </div>
    </Link>

    
    {/* Flight Booking Java Application */}
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      <FaJava className="text-5xl text-gray-700 dark:text-gray-300 mx-auto" />
      <h4 className="text-2xl font-semibold text-center mt-4">Flight Booking Java Application</h4>
      <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
        A desktop-based system for booking flights, managing reservations, and processing secure payments.
      </p>
      <ul className="list-disc pl-6 mt-3 text-gray-500 dark:text-gray-300">
        <li>Search and book flights with real-time availability.</li>
        <li>Secure payment processing and invoice generation.</li>
        <li>Admin dashboard for flight and user management.</li>
        <li>Built with: <strong>Java, Swing, MySQL</strong></li>
      </ul>
    </div>

    {/* Android Chat Application */}
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      <PiChatsCircleBold className="text-5xl text-gray-700 dark:text-gray-300 mx-auto" />
      <h4 className="text-2xl font-semibold text-center mt-4">Android Chat Application</h4>
      <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
        A real-time messaging app with Firebase backend, enabling seamless communication.
      </p>
      <ul className="list-disc pl-6 mt-3 text-gray-500 dark:text-gray-300">
        <li>User authentication with Firebase.</li>
        <li>Group chat, multimedia sharing (images, videos, docs).</li>
        <li>Secure data storage using Firestore.</li>
        <li>Built with: <strong>Java, Firebase, Android Studio</strong></li>
      </ul>
    </div>

    {/* Event Booking System */}
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      <MdEventSeat className="text-5xl text-gray-700 dark:text-gray-300 mx-auto" />
      <h4 className="text-2xl font-semibold text-center mt-4">Event Booking System</h4>
      <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
        A Spring Boot application that allows users to book events, manage schedules, and receive notifications.
      </p>
      <ul className="list-disc pl-6 mt-3 text-gray-500 dark:text-gray-300">
        <li>Search and reserve event tickets with real-time updates.</li>
        <li>Automated email notifications and reminders.</li>
        <li>Secure authentication for event organizers and attendees.</li>
        <li>Built with: <strong>Java, Spring Boot, PostgreSQL</strong></li>
      </ul>
    </div>

    {/* Employee Management System */}
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      <MdAirplaneTicket className="text-5xl text-gray-700 dark:text-gray-300 mx-auto" />
      <h4 className="text-2xl font-semibold text-center mt-4">Employee Management System</h4>
      <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
        A web-based HR management system for handling employee profiles, payroll, and tasks.
      </p>
      <ul className="list-disc pl-6 mt-3 text-gray-500 dark:text-gray-300">
        <li>Role-based access control for HR, managers, and employees.</li>
        <li>Payroll processing, attendance tracking, and task assignments.</li>
        <li>Secure data storage and encryption.</li>
        <li>Built with: <strong>ASP.NET, C#, SQL Server</strong></li>
      </ul>
    </div>

    {/* Payroll Management System */}
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      <LuNotebookText className="text-5xl text-gray-700 dark:text-gray-300 mx-auto" />
      <h4 className="text-2xl font-semibold text-center mt-4">Payroll Management System</h4>
      <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
        A Payroll Management System for store managers using JavaFX.
      </p>
      <ul className="list-disc pl-6 mt-3 text-gray-500 dark:text-gray-300">
        <li>Salary calculation, tax deductions, and payslip generation.</li>
        <li>Attendance tracking and leave management.</li>
        <li>Role-based access for secure employee data management.</li>
        <li>Built with: <strong>Java, JavaFX</strong></li>
      </ul>
    </div>

  </div>
</section>
 <section id="certificates" className="mt-20 p-10 text-center" data-aos="fade-up">
        <h3 className="text-4xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 inline-block text-transparent bg-clip-text">
          My Certifications
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">
          Recognitions and certifications I have earned.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCertificate(cert.image)}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 cursor-pointer"
            >
              <FaAward className="text-5xl text-gray-700 dark:text-gray-300 mx-auto" />
              <h4 className="text-2xl font-semibold text-center mt-4">{cert.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-center mt-2">{cert.description}</p>
            </div>
          ))}
        </div>
        {selectedCertificate && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" onClick={() => setSelectedCertificate(null)}>
            <div className="relative p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <button
                className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 text-3xl cursor-pointer"
                onClick={() => setSelectedCertificate(null)}
              >
                &times;
              </button>
              <Image src={selectedCertificate} alt="Certificate" className="w-auto max-w-full h-auto max-h-[90vh]" />
            </div>
          </div>
        )}
      </section>
<section id="socials" className="mt-20 p-10 text-center">
  <h3 className="text-4xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 inline-block text-transparent bg-clip-text">
    Contact Me
  </h3>
  <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">
    Let's connect! Feel free to reach out on any of the platforms below.
  </p>

  <div className="flex justify-center gap-10 mt-6">
    
    {/* LinkedIn */}
    <a 
      href="https://www.linkedin.com/in/param-patel-830902343/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col items-center transform transition duration-300 hover:scale-110"
    >
      <IoLogoLinkedin className="text-6xl text-blue-600 dark:text-blue-400 group-hover:text-blue-800 transition duration-300" />
      <span className="text-gray-600 dark:text-gray-400 mt-2 text-sm group-hover:text-blue-600">
        LinkedIn
      </span>
    </a>

    {/* GitHub */}
    <a 
      href="https://github.com/ParamAnilkumar" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col items-center transform transition duration-300 hover:scale-110"
    >
      <FaGithub className="text-6xl text-gray-700 dark:text-gray-300 group-hover:text-gray-900 transition duration-300" />
      <span className="text-gray-600 dark:text-gray-400 mt-2 text-sm group-hover:text-gray-700">
        GitHub
      </span>
    </a>

    {/* Instagram */}
    <a 
      href="https://www.instagram.com/paramakp21/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col items-center transform transition duration-300 hover:scale-110"
    >
      <IoLogoInstagram className="text-6xl text-pink-500 dark:text-pink-400 group-hover:text-pink-700 transition duration-300" />
      <span className="text-gray-600 dark:text-gray-400 mt-2 text-sm group-hover:text-pink-500">
        Instagram
      </span>
    </a>

  </div>
</section>

      </main>
    </div>
  );
}
