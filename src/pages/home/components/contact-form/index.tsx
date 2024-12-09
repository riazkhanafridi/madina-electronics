import { memo } from "react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";

const ContactForm = memo(function ContactForm() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mt-6 bg-colors-contactFormBackground px-4">
        <h1 className="font-bold text-white text-2xl mt-6">Get in Touch</h1>
        <div className="md:w-[40%] bg-colors-darkGray shadow-md px-4 rounded-xl h-full flex  flex-col gap-y-6 py-6 mb-6 mt-6 w-full">
          <p className="text-white font-bold ">Name</p>
          <Input
            className="w-full bg-white rounded-xl py-6 text-gray-400"
            placeholder="Your Name"
          />
          <p className="text-white font-bold">Email</p>
          <Input
            className="w-full bg-white rounded-xl py-6 text-gray-400"
            placeholder="Your Email"
          />{" "}
          <p className="text-white font-bold">Subject</p>
          <Input
            className="w-full bg-white rounded-xl py-6 text-gray-400"
            placeholder="Subject"
          />{" "}
          <p className="text-white font-bold">Message</p>
          <Input
            className="w-full bg-white rounded-xl py-6 text-gray-400"
            placeholder="Your Message"
          />
          <Button className="hover:bg-blue-800 font-semibold text-white rounded-xl py-6 w-full mt-10">
       
            Send Message
          </Button>
        </div>
      </div>
    </>
  );
});

export default ContactForm;
