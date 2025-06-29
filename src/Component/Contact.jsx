import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Facebook, Twitter, CheckCircle, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear any previous status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

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
          setSubmitStatus('success');
          console.log("EmailJS success:", result.text);
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          setSubmitStatus('error');
          console.error("EmailJS error:", error.text);
          setIsSubmitting(false);
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
        <div className="md:w-[40%] bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border border-blue-100 space-y-6">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <div>
                <h4 className="text-2xl font-semibold text-gray-800">Email</h4>
                <p className="text-xl text-gray-600">mdibrahimabdullah1@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-600 text-2xl" />
              <div>
                <h4 className="text-2xl font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600 text-xl">+8801887383971</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500 text-2xl" />
              <div>
                <h4 className="text-2xl font-semibold text-gray-800">WhatsApp</h4>
                <p className="text-gray-600 text-xl">+8801887383971</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-6">
            <a
              href="https://www.facebook.com/Ibrahim376146ab/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Facebook profile"
              className="p-3 bg-white rounded-full border border-blue-100 text-blue-600 hover:bg-blue-50 hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <Facebook className="w-6 h-6" />
            </a>

            <a
              href="https://x.com/ibrahim376146"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Twitter profile"
              className="p-3 bg-white rounded-full border border-blue-100 text-blue-600 hover:bg-blue-50 hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-[60%] bg-white rounded-2xl p-8 shadow-lg border border-gray-200 space-y-5">
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium">Message sent successfully! Thank you for reaching out.</span>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
              <XCircle className="w-5 h-5 text-red-600" />
              <span className="font-medium">Something went wrong. Please try again later.</span>
            </div>
          )}

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
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-medium transition duration-300 hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${
              isSubmitting ? 'cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;