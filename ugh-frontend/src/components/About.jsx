import { ArrowBigLeft } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="max-w-xl w-full p-8 bg-gray-900 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">About UGH</h1>
        <p className="mb-4 text-lg text-gray-100">
          UGH is a tool designed to manage university tasks efficiently. It helps
          students keep track of their notes, labs, and reports in a user-friendly
          interface.
        </p>
        <p className="mb-2 text-base text-gray-300">
          To check out the source code, visit our{' '}
          <a
            href=""
            target="_blank"
            className="text-blue-300 underline hover:text-blue-400 transition"
          >
            GitHub repository
          </a>
          .
        </p>
        <p className="text-sm text-gray-400 mb-8">Version 1.0.0</p>
        <div>
          <a
            href="/"
            className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition inline-flex items-center"
          >
            <ArrowBigLeft className="mr-2 text-indigo-200" />
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;