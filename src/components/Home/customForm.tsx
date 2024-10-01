import React, { useState } from "react";
import { EmailFormFields } from "react-mailchimp-subscribe";
import { AnimatePresence, motion } from "framer-motion";

interface CustomFormProps {
  message: string | Error | null;
  onValidated: (formData: EmailFormFields) => void;
}

const CustomForm: React.FC<CustomFormProps> = ({ onValidated }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

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
    <form
      className="w-full flex flex-col items-center pb-10 md:pb-3"
      onSubmit={handleSubmit}
    >
      <div className="bg-light2 bg-opacity-60 bg-white/50 rounded-md lg:p-5 p-3 max-w-md">
        <div className="flex p-3 text-black bg-white/50 rounded-md text-left items-center">
          <div className="mr-3 flex-grow">
            <h4 className="lg:text-lg text-ml font-bold">
              Sign up for our Newsletter
            </h4>
            <p className="lg:text-ms text-sm">
              Stay caught up on all news related to the NeoDev League!
            </p>
          </div>
        </div>
        <div className="relative flex items-center pt-4 pb-1 w-full">
          <motion.input
            type="email"
            placeholder="info@neoleague.dev"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full lg:pr-32 p-3 lg:pr-30 pr-24 lg:text-msd text-ms border border-lighterGreen rounded-md focus:outline-none focus:ring-1 focus:ring-lighterGreen transition-shadow duration-300 bg-opacity-90 placeholder-black text-lighterGreen"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: -6 }}
            transition={{ duration: 1 }}
          />
          <AnimatePresence mode="sync">
            {status === "idle" && (
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center overflow-hidden rounded-md bg-dark3 text-light4 lg:text-md text-ms px-5 py-2 cursor-pointer hover:scale-[0.99]"
              >
                Subscribe
              </button>
            )}
            {status === "sending" && (
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center overflow-hidden rounded-md bg-blurred text-white lg:px-6 px-3 lg:py-2 py-1">
                Sending...
              </div>
            )}
            {status === "error" && (
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center overflow-hidden rounded-md bg-red-500 text-white lg:px-6 px-3 lg:py-2 py-1 text-sm leading-snug text-center cursor-pointer">
                Please enter a valid email address.
              </div>
            )}
            {status === "success" && (
              <motion.button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center overflow-hidden rounded-md bg-lighterGreen text-white lg:px-6 px-3 lg:py-2 py-1"
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
                  style={{ color: "light4", opacity: 0.6 }}
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
