import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "../components/customForm.tsx";
import "../../src/style.css";

const MailchimpFormContainer: React.FC = () => {
  const postUrl = import.meta.env.VITE_MAILCHIMP_URL || "";

  return (
    <div className="flex flex-col items-center rounded shadow-lg md:p-2">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, message }) => (
          <CustomForm
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;
