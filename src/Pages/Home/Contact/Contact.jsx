import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    number: "",
    message: "",
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  function handleMoveToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function validateForm() {
    let tempErrors = {};
    if (!form.name) tempErrors.name = "Name is required";
    if (!form.email) {
      tempErrors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      tempErrors.email = "Email is not valid";
    }
    if (!form.number) {
      tempErrors.number = "Number is required";
    } else if (!validateNumber(form.number)) {
      tempErrors.number = "Number is not valid";
    }
    if (!form.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      const templateParams = {
        from_name: form.name,
        message_html: form.message,
        reply_to: form.email,
      };

      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_USER_ID
        )
        .then(
          (result) => {
            alert("Thank you for your message. I'll contact you soon.");
            setForm(initialState);
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    } else {
      alert("Please fill in all the required fields.");
    }
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateNumber(num) {
    const numString = num.toString();
    return !isNaN(numString) && numString.length === 10;
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-6xl font-bold text-yellow-200 mb-10">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <hr className="border-2 col-span-1 lg:mr-5" />
          <div className="col-span-1 lg:col-span-11 grid grid-cols-1 md:grid-cols-2 gap-4 pb-10">
            {/* Contact Details */}
            <div className="p-3 lg:p-10 border border-yellow-200 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10"
                >
                  <FaUserCircle className="text-yellow-200" size="25" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="ml-2"
                >
                  <p className="lg:text-xl font-semibold">Moriyam Mohona</p>
                </motion.div>
              </div>

              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10"
                >
                  <MdEmail className="text-yellow-200" size="25" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="ml-2"
                >
                  <a
                    href="mailto:moriyammohona@gmail.com"
                    className="lg:text-xl font-semibold"
                  >
                    moriyammohona@gmail.com
                  </a>
                </motion.div>
              </div>

              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10"
                >
                  <AiFillLinkedin className="text-yellow-200" size="25" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="ml-2"
                >
                  <a
                    href="https://www.linkedin.com/in/moriyam-mohona-5a1bb9252/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:text-xl  font-semibold"
                  >
                    Moriyam Mohona
                  </a>
                </motion.div>
              </div>

              <div className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10"
                >
                  <AiFillGithub className="text-yellow-200" size="25" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="ml-2"
                >
                  <a
                    href="https://github.com/moriyam-mohona"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:text-xl font-semibold"
                  >
                    moriyam-mohona
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              className="p-4 border border-yellow-200 rounded-lg shadow-md"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="name"
                  className="text-left text-yellow-200 text-lg mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="p-2 border border-gray-300 rounded-md outline-none focus:border-yellow-200"
                  placeholder="Enter Your Name"
                  value={form.name}
                  onChange={handleInput}
                  aria-label="Name"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>

              <div className="flex flex-col mb-4">
                <label
                  htmlFor="email"
                  className="text-left text-yellow-200 text-lg mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-2 border border-gray-300 rounded-md outline-none focus:border-yellow-200"
                  placeholder="Enter Your Email"
                  value={form.email}
                  onChange={handleInput}
                  aria-label="Email"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>

              <div className="flex flex-col mb-4">
                <label
                  htmlFor="number"
                  className="text-left text-yellow-200 text-lg mb-2"
                >
                  Number:
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  className="p-2 border border-gray-300 rounded-md outline-none focus:border-yellow-200"
                  placeholder="Enter Your Number"
                  value={form.number}
                  onChange={handleInput}
                  aria-label="Number"
                />
                {errors.number && (
                  <p className="text-red-500">{errors.number}</p>
                )}
              </div>

              <div className="flex flex-col mb-4">
                <label
                  htmlFor="message"
                  className="text-left text-yellow-200 text-lg mb-2"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="p-2 border border-gray-300 rounded-md outline-none focus:border-yellow-200"
                  placeholder="Enter Your Message"
                  value={form.message}
                  onChange={handleInput}
                  aria-label="Message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-transparent text-xl border rounded-md hover:bg-base-300 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8">
          <BsFillArrowUpSquareFill
            onClick={handleMoveToTop}
            className=" cursor-pointer text-yellow-200"
            size="35"
            aria-label="Move to Top"
          />
          <p className="font-semibold text-yellow-200">Top</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
