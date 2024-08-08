import React, { useState } from "react";
import { EmailFormFields } from "react-mailchimp-subscribe";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../assets/logo2.png";

interface CustomFormProps {
  message: string | Error | null;
  onValidated: (formData: EmailFormFields) => void;
}

const CustomForm: React.FC<CustomFormProps> = ({ onValidated }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "") {
      setStatus("error");
    } else if (email && email.indexOf("@") > -1) {
      setStatus("sending");
      onValidated({ EMAIL: email });
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
      <div className="bg-light2 bg-opacity-60 bg-white/50 rounded-md p-5 w-full max-w-md">
        <div className="flex p-3 text-black bg-white/50 rounded-md text-left items-center">
          <div className="mr-3 flex-grow">
            <h4 className="text-lg font-bold">Sign up for our newsletter!</h4>
            <p className="text-ms">Stay caught up on all news related to the NeoDev League!</p>
          </div>
          <img src={Logo} className="h-10 w-10" alt="Logo"></img>
        </div>
        <div className="relative flex items-center pt-3 w-full">
          <motion.input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 pr-32 border border-gray rounded-md focus:outline-none focus:ring-4 focus:ring-darkerGreen transition-shadow duration-300 bg-opacity-90 w-full"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: -5 }}
            transition={{ duration: 1 }}
          />
          <AnimatePresence mode="sync">
            {status === "idle" && (
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center overflow-hidden rounded-md bg-darkerGreen text-white px-6 py-2 cursor-pointer"
              >
                Subscribe
              </button>
            )}
            {status === "sending" && (
              <div
                className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center overflow-hidden rounded-md bg-blurred text-white px-6 py-2"
              >
                Sending...
              </div>
            )}
            {status === "error" && (
              <div
                className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center overflow-hidden rounded-md bg-red-500 text-white px-6 py-2 text-sm leading-snug text-center cursor-pointer"
              >
                Please enter a valid email address.
              </div>
            )}
            {status === "success" && (
              <motion.button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center overflow-hidden rounded-md bg-lighterGreen text-white px-6 py-2"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -19 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  key="changeText"
                  className="relative block h-full w-full font-semibold"
                  initial={{ y: -50 }}
                  animate={{ y: 0 }}
                  style={{ color: "green", opacity: 0.6 }}
                >
                  Subscribed!
                </motion.span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </form>
  );
};

export default CustomForm;