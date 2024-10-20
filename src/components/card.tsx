import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return <div className="px-6 py-4 border-b border-gray-700">{children}</div>;
};

interface CardTitleProps {
  children: ReactNode;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <h3 className="text-xl font-semibold text-[#D1FAE5]">{children}</h3>;
};

interface CardContentProps {
  children: ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <div className="px-6 py-4">{children}</div>;
};
