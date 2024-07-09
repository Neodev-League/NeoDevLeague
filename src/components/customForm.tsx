import React, { useState } from "react";
import { EmailFormFields } from "react-mailchimp-subscribe";
import { AnimatePresence, motion } from "framer-motion";

interface CustomFormProps {
  status: string | null;
  message: string | Error | null;
  onValidated: (formData: EmailFormFields) => void;
}

const CustomForm: React.FC<CustomFormProps> = ({
  status,
  message,
  onValidated,
}) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      onValidated({ EMAIL: email });
      setIsSubscribed(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="e-float-input e-input-group">
        <motion.input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-shadow duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <AnimatePresence mode="wait">
        {!isSubscribed && !status && (
          <motion.button
            className="relative flex w-48 cursor-pointer items-center justify-center rounded-md bg-green-500 text-white p-3 pr-5 pl-5 shadow-lg transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            type="submit"
          >
            <motion.span
              key="initialText"
              className="relative block font-semibold"
              initial={{ x: 0 }}
              exit={{ x: 50, transition: { duration: 0.1 } }}
            >
              Subscribe
            </motion.span>
          </motion.button>
        )}
        {isSubscribed && status === "sending" && (
          <div className="p-2 pl-3 pr-3 bg-gray-800 border-e-orange-950 mt-2 rounded-md text-gray-500 font-bold text-lg">
            Sending...
          </div>
        )}
        {isSubscribed && status === "error" && (
          <div
            className="mt-2 text-red-500"
            dangerouslySetInnerHTML={{ __html: message as string }}
          />
        )}
        {isSubscribed && status === "success" && (
          <motion.button
            className="relative flex w-48 items-center justify-center overflow-hidden rounded-md bg-green-500 text-white p-3 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
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
    </form>
  );
};

export default CustomForm;
