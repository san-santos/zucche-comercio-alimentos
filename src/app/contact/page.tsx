"use client"

import dynamic from "next/dynamic";
const ContactInfo = dynamic(() => import("../../components/contact/contact-info"), { ssr: false });
const ContactForm = dynamic(() => import("../../components/contact/contact-form"), { ssr: false });
const ContactMap = dynamic(() => import("../../components/contact/contact-map"), { ssr: false });

export default function Contact() {
  return (
    <>
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </>
  );
}
