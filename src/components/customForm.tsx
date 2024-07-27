import React, { useState } from "react";
import { EmailFormFields } from "react-mailchimp-subscribe";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";

import { AnimatedSubscribeButton } from "../../@/components/magicui/animated-subscribe-button.tsx";
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
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
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

        <AnimatePresence mode="wait">
          {!isSubscribed && !status && (
            <AnimatedSubscribeButton
              buttonColor="green"
              buttonTextColor="#ffffff"
              subscribeStatus={false}
              initialText={
                <span className="relative flex w-48 items-center justify-center overflow-hidden rounded-md bg-blurred text-white p-3 shadow-button-green">
                  Subscribe{" "}
                  <ChevronRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              }
              changeText={
                <span className="relative flex w-48 items-center justify-center overflow-hidden rounded-md bg-blurred text-white p-3 shadow-button-green">
                  Subscribed{" "}
                  <ChevronRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              }
            />
          )}
          {isSubscribed && status === "sending" && (
            <div className="p-2 pl-3 pr-3 bg-gray border-e-orange-950 mt-2 rounded-md text-gray font-bold text-lg">
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
