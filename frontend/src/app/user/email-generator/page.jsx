"use client";
import React, { useState } from "react";
import { useFormik } from 'formik';
import axios from "axios";

export default function EmailGenerator() {
  // const [prompt, setPrompt] = useState("");
  const [generatedemail, setGeneratedEmail] = useState("");
  //ye tumhe API ka result store karne ke liye chahiye
  const formik = useFormik({
    //ye tumhara input manage kar raha hai 
    initialValues: {
      prompt: "",
    },
    onSubmit: async (values) => {
      console.log(values);

      try {
        const res = await axios.post("http://localhost:5000/ai/generate-email", {
          prompt: values.prompt,
        });
        setGeneratedEmail(res.data.email);
      } catch (err) {
        console.log("Error generating email:", err);
      }
    },
  });

  // const handleGenerate = () => {
  //   // For now dummy text (yaha API call kar sakte ho)
  //   setEmail(
  //   );
  // };

  const handleClear = () => {
    formik.resetForm();
    setGeneratedEmail("");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedemail);
    alert("Email copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl grid grid-cols-2 gap-6 p-6">

        {/* Left Side - Prompt Input */}
        <form onSubmit={formik.handleSubmit}>


          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">✍️ Write Your Prompt</h2>
            <textarea
              className="flex-1 border rounded-xl p-4 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your email prompt here..."
              id="prompt"
              value={formik.values.prompt}
              onChange={formik.handleChange}
            />
            <div className="mt-4 flex gap-3">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
              >
                Generate
              </button>
              {/* <button
              onClick={handleClear}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-xl shadow hover:bg-gray-400 transition"
            >
              Clear
            </button> */}
            </div>
          </div>

        </form>

        {/* Right Side - Generated Email */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">📧 Generated Email</h2>
          <div className="flex-1 border rounded-xl p-4 bg-gray-50 text-gray-800 whitespace-pre-line overflow-y-auto">
            {formik.values.prompt ? generatedemail : "Your generated email will appear here..."}
          </div>
          {generatedemail && (
            <button
              onClick={handleCopy}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
            >
              Copy Email
            </button>
          )}
        </div>
      </div>
    </div>
  );
}