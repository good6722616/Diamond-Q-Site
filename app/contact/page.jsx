"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";
const Contact = () => {
  return (
    <div>
      <div className="bg-[url('/image/contact.jpg')] bg-center bg-cover">
        <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left ">
          GET IN TOUCH
        </h1>
      </div>
      <div className="container grid md:grid-cols-2 gap-8">
        <div className="inquiry_container">
          <h1 className="text-2xl mt-8">Online Inquiry</h1>
          <ContactForm />
        </div>
        <div className="contact_container">
          <h1 className="text-2xl mt-8">Contact Details</h1>
          <p className="my-8">Email: diamondqcon@gmail.com</p>
          <p className="my-8">Phone:(949) 385-3378</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
