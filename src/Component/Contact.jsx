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
        "service_ifd50ip", // ✅ Your Service ID
        "template_pnuoy1p", // ✅ Your Template ID
        {
          ...formData,
          title: "Contact from Portfolio", // Matches {{title}} in template subject
        },
        "ymd2GY2GgxlsFCeLO" // ✅ Your Public Key
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
    <section id="contact" className="mt-16 mb-16">
      <h3 className="text-3xl font-bold text-blue-700 mb-12 text-center">
        Get in Touch
      </h3>

      <div className="flex flex-col justify-around md:flex-row gap-10">
        {/* Contact Info */}
        <div className="md:w-1/2 bg-white p-8 shadow-lg space-y-6">
          <div className="p-4 border-4 border-blue-600 rounded-2xl space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 text-xl" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">mdibrahimabdullah1@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+8801887383971</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500 text-xl" />
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
          className="md:w-1/2 bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
        >
          <div className="mb-5">
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
