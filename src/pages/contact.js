import { ArrowUpIcon } from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import { motion as m } from "framer-motion";
import React, { useRef } from "react";
import Link from "next/link";
import Layout from "./components/Layout";
import { useToast } from "@/components/ui/use-toast";

function Contact() {
  const { toast } = useToast();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3tnemf9",
        "template_sxituza",
        form.current,
        "hJyfDNCcmW7lTYk0d"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Message sent 😁");
  };

  return (
    <Layout>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        exit={{ opacity: 0 }}
      >
        <div className="pageLayout">
          <h1 className="pageTitle">Contact.</h1>
          <div className="pageContent">
            <div className="mb-4 md:mb-8 text-sm md:text-base textStyle">
              <span>
                Get in touch or send me an email directly on{" "}
                <span
                  onClick={() => {
                    toast(
                      {
                        title: "",
                        description: "Email copied to clipboard 🤳",
                      },
                      { variant: "destructive" },
                      { autoDismiss: true },
                      { duration: 2000 }
                    );
                  }}
                  className="linkStyle font-semibold"
                >
                  lehoangbach7802@gmail.com{" "}
                </span>
              </span>
            </div>
            <div className="">
              <form
                ref={form}
                onSubmit={(e) => sendEmail(e)}
                className="grid grid-flow-row space-y-5 py-2 w-full md:w-1/2"
              >
                <input
                  className="rounded-md border-[1px] w-full h-14 indent-5"
                  placeholder="Name"
                  name="user_name"
                  required
                ></input>

                <input
                  className="rounded-md border-[1px] w-full h-14 indent-5"
                  placeholder="Email"
                  name="user_email"
                  required
                ></input>

                <textarea
                  className="rounded-md border-[1px] w-full h-32 textAreaContact indent-5 py-5"
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
                <button
                  className="w-1/2 bg-light-accent dark:bg-dark-accent h-14 text-dark-text dark:text-light-text rounded-md text-sm md:text-base font-medium"
                  type="submit"
                  value="Send"
                >
                  Send Message
                </button>
              </form>
            </div>

            <Link href="/">
              <div className="my-4 md:my-8 flex space-x-3 cursor-pointer">
                <p className="text-light-text dark:text-dark-text text-base hover:underline">
                  Go back home
                </p>
                <div className="rotate-90 ">
                  <ArrowUpIcon className="text-light-accent dark:text-dark-accent w-5 rotate-90 animate-bounce" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </m.div>
    </Layout>
  );
}

export default Contact;
