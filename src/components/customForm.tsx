import React, { useState } from "react";
import { EmailFormFields } from "react-mailchimp-subscribe";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";

interface CustomFormProps {
  message: string | Error | null;
  onValidated: (formData: EmailFormFields) => void;
}

const CustomForm: React.FC<CustomFormProps> = ({
  onValidated,
}) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email==="") {
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
    <form className="w-full flex flex-col items-center">
      <div className="bg-light2 bg-opacity-60 rounded-md">
        <div className="p-3 text-darkerGreen text-center">
          <h4>Signup to Learn More</h4>
        </div>
        <div>
          <motion.input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 mb-1 border border-gray rounded-md focus:outline-none focus:ring-4 focus:ring-darkerGreen transition-shadow duration-300 bg-opacity-90"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: -5 }}
            transition={{ duration: 1 }}
          />
        </div>

        <AnimatePresence mode="sync">
          {status === "idle" && (
              <div onClick={handleSubmit} className="relative flex w-48 items-center justify-center overflow-hidden rounded-md bg-darkerGreen text-white p-3 shadow-button-darkerGreen">
                  Subscribe{" "}
                  <ChevronRightIcon  className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
          )}
          {status === "sending" && (
            <div className="relative flex w-48 items-center justify-center overflow-hidden rounded-md bg-blurred text-white p-3 shadow-button-gray">
              Sending...
            </div>
          )}
          {status === "error" && (
            <div onClick={handleSubmit} className="relative flex w-48 items-center justify-center overflow-hidden rounded-md bg-red-500 text-white p-3 shadow-button-gray">
              Please enter a valid email address.
            </div>
          )}
          {status === "success" && (
            <motion.button
              className="relative flex w-48 items-center justify-center overflow-hidden rounded-md bg-lighterGreen text-white p-3 shadow-button-green"
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
      </div>
    </form>
  );
};

export default CustomForm;