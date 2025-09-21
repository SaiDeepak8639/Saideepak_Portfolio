// src/components/Contact.jsx
import React from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-4 md:px-8 items-center">
        
        {/* Left Side - Contact Form */}
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-purple-400/30">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-cyan-300">
            Send Me a Message
          </h2>

          <form
            id="contact-form"
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();

              emailjs
                .sendForm(
                  "service_b1m8jsc",
                  "template_mjpq5eu",
                  e.target,
                  "AFmtGuVOOTsDnSVON"
                )
                .then(
                  () => alert("✅ Message sent successfully!"),
                  () => alert("❌ Failed to send message. Try again.")
                );

              e.target.reset();
            }}
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="w-full p-2 rounded-md text-black focus:ring-2 focus:ring-cyan-400 outline-none"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="w-full p-2 rounded-md text-black focus:ring-2 focus:ring-cyan-400 outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-2 rounded-md text-black focus:ring-2 focus:ring-cyan-400 outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              🚀 Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={`${import.meta.env.BASE_URL}contact.jpg`}
            alt="Contact Illustration"
            className="rounded-2xl shadow-2xl w-56 h-56 md:w-72 md:h-72 object-cover border-4 border-cyan-400"
          />
        </div>
      </div>
    </section>
  );
}
