// components/MailchimpFormContainer.tsx

import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "../components/customForm.tsx";
import "../../src/style.css";

const MailchimpFormContainer: React.FC = () => {
  const postUrl = import.meta.env.VITE_MAILCHIMP_URL || "";

  return (
    <div className="flex flex-col items-center max-w-xs p-4 mx-auto my-4 rounded shadow-lg md:p-2 md:my-4">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;
