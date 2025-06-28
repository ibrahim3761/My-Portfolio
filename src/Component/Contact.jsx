import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ifd50ip",
        "template_pnuoy1p",
        {
          ...formData,
          title: "Contact from Portfolio",
        },
        "ymd2GY2GgxlsFCeLO"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log("EmailJS success:", result.text);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Something went wrong. Please try again later.");
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="mt-16 mb-16 scroll-mt-20">
      <h3 className="text-3xl font-bold text-blue-700 mb-12 text-center md:text-left">
        Get in Touch
      </h3>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Info */}
        <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border border-blue-100 space-y-6">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">mdibrahimabdullah1@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-600 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+8801887383971</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">WhatsApp</h4>
                <p className="text-gray-600">+8801887383971</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 bg-white rounded-2xl p-8 shadow-lg border border-gray-200 space-y-5"
        >
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Write your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-medium transition duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
