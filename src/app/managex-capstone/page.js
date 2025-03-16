"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { MdOutlineAddBusiness } from "react-icons/md";

export default function ManageXCapstone() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 text-black dark:bg-gray-900 dark:text-white">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl cursor-not-allowed">ManageX - Capstone Project</h1>
          <ul className="flex items-center">
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl"
              >
                🌙
              </button>
            </li>
          </ul>
        </nav>

        <section className="text-center p-10 font-lora" data-aos="fade-up">
          <h1 className="text-6xl py-2 font-medium bg-gradient-to-r from-slate-700 to-cyan-700 inline-block text-transparent bg-clip-text sm:text-7xl dark:from-slate-300 dark:to-cyan-500">
            ManageX - Capstone Project
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mt-5 text-lg leading-relaxed">
            ManageX is an Android application designed to assist small business owners in managing their daily operations efficiently. It provides features for **point-of-sale (POS) system creation, inventory tracking, employee data management, and financial reporting**. The goal is to streamline business operations by offering an intuitive and easy-to-use interface for business owners.
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10" data-aos="fade-up">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <MdOutlineAddBusiness className="text-5xl text-gray-700 dark:text-gray-300 mx-auto" />
            <h4 className="text-2xl font-semibold text-center mt-4">POS System</h4>
            <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
              The POS system in ManageX allows businesses to efficiently manage sales transactions. Users can dynamically add products, apply discounts, and track revenue in real-time. The system also supports customizable pricing based on different product sizes or options, ensuring flexibility for businesses of all types.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <MdOutlineAddBusiness className="text-5xl text-gray-700 dark:text-gray-300 mx-auto" />
            <h4 className="text-2xl font-semibold text-center mt-4">Inventory Management</h4>
            <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
              ManageX provides real-time inventory tracking, helping businesses monitor stock levels and receive low-stock alerts. It categorizes products efficiently, allowing users to manage their inventory with ease. Business owners can also generate inventory reports to assess product performance and demand trends.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <MdOutlineAddBusiness className="text-5xl text-gray-700 dark:text-gray-300 mx-auto" />
            <h4 className="text-2xl font-semibold text-center mt-4">Employee Management</h4>
            <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
              The employee management system in ManageX allows business owners to track employee work hours, manage payroll, and schedule shifts efficiently. Employees can clock in and out digitally, and managers can approve timesheets. This feature streamlines HR processes and improves workforce productivity.
            </p>
          </div>
        </section>

        <section className="mt-10 p-10 text-center" data-aos="fade-up">
          <h3 className="text-4xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 inline-block text-transparent bg-clip-text">
            Future Enhancements
          </h3>
          <ul className="list-disc pl-6 mt-3 text-gray-500 dark:text-gray-300 text-left mx-auto max-w-3xl">
            <li><strong>AI-Based Sales Predictions:</strong> Implementing machine learning models to analyze sales trends and predict future demand.</li>
            <li><strong>Third-Party Payment Integration:</strong> Supporting PayPal, Stripe, and other payment gateways for seamless transactions.</li>
            <li><strong>Web-Based Dashboard:</strong> Providing business owners access to their sales and inventory reports from any device.</li>
          </ul>
        </section>
        <section className="mt-10 p-10 text-center">
          <h3 className="text-4xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 inline-block text-transparent bg-clip-text">
            Technology Used
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  <th className="py-3 px-6 text-center">Category</th>
                  <th className="py-3 px-6 text-center">Technology/Tool</th>
                  <th className="py-3 px-6 text-center">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="py-3 px-6">Framework and Libraries</td>
                  <td className="py-3 px-6">Android SDK</td>
                  <td className="py-3 px-6">Core framework for building Android applications.</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="py-3 px-6">Database Management</td>
                  <td className="py-3 px-6">Firebase</td>
                  <td className="py-3 px-6">Stores user and business data, supports real-time updates.</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="py-3 px-6">Authentication & Security</td>
                  <td className="py-3 px-6">Firebase Authentication</td>
                  <td className="py-3 px-6">Secures user authentication and data access.</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="py-3 px-6">Payment Integration</td>
                  <td className="py-3 px-6">Stripe or PayPal SDK</td>
                  <td className="py-3 px-6">Enables secure and seamless payment processing for users.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="text-center p-10">
          <Link href="/" className="text-lg text-blue-500 hover:underline">Back to Home</Link>
        </section>
      </main>
    </div>
  );
}
