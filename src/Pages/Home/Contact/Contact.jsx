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

  function handleMoveToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();

    const { name, email, number, message } = form;

    if (name && email && number && message) {
      if (!validateNumber(number)) {
        alert("Please enter a valid 10 digit Number.");
        return;
      }
      if (validateEmail(email)) {
        const templateParams = {
          from_name: name,
          message_html: message,
          reply_to: email,
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
        alert("Please enter a valid email address.");
      }
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
    return !isNaN(numString);
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-6xl font-bold text-yellow-200 mb-10">Contact Me</h2>
      <div className="grid grid-cols-12 gap-5 ">
        <hr className="border-2 col-span-1 mr-5" />
        <div className=" col-span-11 grid grid-cols-1 md:grid-cols-2 gap-4 pb-10">
          {/* Contact Details */}
          <div className="p-20 border border-yellow-200 rounded-lg shadow-md">
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
                <p className="text-xl font-semibold">Moriyam Mohona</p>
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
                  className="text-xl font-semibold"
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
                  className="text-xl  font-semibold"
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
                  className="text-xl font-semibold"
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
            <div className="flex items-center mb-4">
              <label
                htmlFor="name"
                className="w-1/4 text-left text-yellow-200 text-lg"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-3/4 p-2 border border-gray-300 rounded-md outline-none focus:border-yellow-200"
                placeholder="Enter Your Name"
                value={form.name}
                onChange={handleInput}
              />
            </div>

            <div className="flex items-center mb-4">
              <label
                htmlFor="email"
                className="w-1/4 text-left text-yellow-200 text-lg"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-3/4 p-2 border border-gray-300 rounded-md outline-none focus:border-yellow-200"
                placeholder="Enter Your Email"
                value={form.email}
                onChange={handleInput}
              />
            </div>

            <div className="flex items-center mb-4">
              <label
                htmlFor="number"
                className="w-1/4 text-left text-yellow-200 text-lg"
              >
                Number:
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                className="w-3/4 p-2 border border-gray-300 rounded-md outline-none focus:border-yellow-200"
                placeholder="Enter Your Number"
                value={form.number}
                onChange={handleInput}
              />
            </div>

            <div className="flex items-center mb-4">
              <label
                htmlFor="message"
                className="w-1/4 text-left text-yellow-200 text-lg"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-3/4 p-2 border border-gray-300 rounded-md outline-none focus:border-yellow-200"
                placeholder="Enter Your Message"
                value={form.message}
                onChange={handleInput}
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
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
          className=" cursor-pointer"
          size="35"
        />
        <p className="font-semibold">Top</p>
      </div>
    </section>
  );
};

export default Contact;
