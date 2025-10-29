import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
    "service_p5gdnxs",       // ✅ Your EmailJS Service ID
    "template_oc9vguh",      // ✅ Your EmailJS Template ID
    e.target,                // ✅ The form element
    "jGnO20a1YF_QB-ERw" 
      )
      .then(
        () => alert("✅ Message sent successfully!"),
        () => alert("❌ Failed to send. Try again later.")
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-20 bg-gradient-to-b from-cyan-50 via-white to-blue-100 text-gray-800"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Get In <span className="text-cyan-600">Touch</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Feel free to drop a message or connect via social links below.
        </p>
      </div>

      {/* Contact form */}
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md border border-cyan-100 rounded-2xl shadow-xl p-8 md:p-12">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none w-full"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none w-full"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message..."
            rows="5"
            required
            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none"
          ></textarea>

          <button
            type="submit"
            className="px-8 py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>

     

    
    </section>
  );
}
