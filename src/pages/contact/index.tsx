import { memo } from "react";
import OurContact from "../home/components/hero";
import ContactForm from "../home/components/contact-form";

const Contact = memo(function Contact() {
  return (
    <div>
      <OurContact />
      <ContactForm />
    </div>
  );
});

export default Contact;
