// src/components/Contact.jsx
import React from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  return (
    <section id="contact" className="py-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        
        {/* Left Side - Image */}
        <div className="flex justify-center items-center">
          <img
            src={`${import.meta.env.BASE_URL}contact.jpg`}
            alt="Contact Illustration"
            className="rounded-lg shadow-lg w-96 md:w-112"
          />
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">
            CONTACT ME <span className="text-white">TO GET STARTED</span>
          </h2>

          <form
            id="contact-form"
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();

              emailjs
                .sendForm(
                  "service_b1m8jsc", // ✅ Your Service ID
                  "template_mjpq5eu", // ✅ Your Template ID
                  e.target,          // Pass form element
                  "AFmtGuVOOTsDnSVON" // ✅ Your Public Key
                )
                .then(
                  (result) => {
                    console.log("✅ Message sent:", result.text);
                    alert("Message sent successfully!");
                  },
                  (error) => {
                    console.error("❌ Error:", error.text);
                    alert("Failed to send message. Try again.");
                  }
                );

              e.target.reset(); // clears form after submit
            }}
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              className="w-full p-3 rounded-md text-black"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Email"
              className="w-full p-3 rounded-md text-black"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              className="w-full p-3 rounded-md text-black"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
