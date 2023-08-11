import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


//NLF0JRkgHZ34J_Wh5
//template_k7zw27f
//service_khwlij2
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_khwlij2',
        'template_k7zw27f',
        {
          from_name: form.name,
          to_name: "Laxman",
          from_email: form.email,
          to_email: 'rafadeinol@gmail.com',
          message: form.message,
        },
        'NLF0JRkgHZ34J_Wh5'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "spring", 0.2, 1)}
        className='flex-[1] bg-black-100 p-8 rounded-2xl justify-center'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <button className="bg-none hover:underline decoration-pink-600 rounded">
          <h1 className="font-black md:text-[30px] sm:text-[25px] xs:text-[20px] text-[15px]">
            <a href="https://www.linkedin.com/in/laxman-m/" target="_blank">
              <div className="flex justify-between align-center blue-text-gradient">
                Linkedin
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              </div>
            </a>
          </h1>
        </button>
        <button className="bg-none hover:underline decoration-blue-500 rounded">
          <h1 className="font-black md:text-[30px] sm:text-[25px] xs:text-[20px] text-[15px] ">
            <a href="https://github.com/m-laxman" target="_blank">
              <div className="flex justify-between align-center pink-text-gradient mx-5">
                Github
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              </div>
            </a>
          </h1>
        </button>
        <h3 className={styles.sectionHeadText}>Hire | Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your web address"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Type your message'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 hover:outline-white rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");