import React, { useState } from 'react';
import { EmailFormFields } from 'react-mailchimp-subscribe';

interface CustomFormProps {
  status: string | null;
  message: string | Error | null;
  onValidated: (formData: EmailFormFields) => void;
}

const CustomForm: React.FC<CustomFormProps> = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      onValidated({ EMAIL: email });
    }
  };

  console.log(status);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className='e-float-input e-input-group'>
        <input
          type="email"
          placeholder="Signup to learn more!"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {!status && (
        <button type="submit" className="w-full p-2 text-white bg-green-700 rounded hover:bg-green-800">
          Subscribe
        </button>
      )}
      {status === "sending" && <div className="mt-2 text-gray-500">Sending...</div>}
      {status === "error" && <div className="mt-2 text-red-500" dangerouslySetInnerHTML={{ __html: message as string }} />}
      {status === "success" && <div className="mt-2 text-green-500">Subscribed!</div>}
    </form>
  );
};

export default CustomForm;
