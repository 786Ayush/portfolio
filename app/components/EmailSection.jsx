"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSubmitted(false);
    setError("");
    setLoading(true);

    const formData = {
      Email: e.target.email.value,
      Subject: e.target.subject.value,
      Message: e.target.message.value,
    };

    try {
      const response = await fetch("https://sheetdb.io/api/v1/yux3o66wz3z7t", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: [formData] }),
      });

      if (response.ok) {
        setEmailSubmitted(true);
        e.target.reset(); // Clear form
      } else {
        setError("Failed to submit. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative"
      id="contact"
    >
      {/* Decorative background */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      {/* Contact Info & Socials */}
      <div className="z-10">
        <h5 className="text-2xl font-bold text-white my-2">{`Let's Connect!`}</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {`I'm always excited to collaborate on innovative projects. Whether you 
  want to discuss a potential idea, need help with development, or just 
  want to say hi, feel free to reach out. I'll respond as soon as possible!`}
        </p>

        <div className="flex flex-row gap-3">
          <Link href="https://github.com/786Ayush">
            <Image src={GithubIcon} alt="Github Icon" width={28} height={28} />
          </Link>
          <Link href="https://www.linkedin.com/in/ayush0786/">
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              width={28}
              height={28}
            />
          </Link>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Project Inquiry / Just Saying Hi"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Feedback */}
          {emailSubmitted && (
            <p className="text-green-400 mt-2">Message sent successfully!</p>
          )}
          {error && <p className="text-red-400 mt-2">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
