import React from "react";
import "./Modal.css";

type ModalProps = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title?: string;
  closable?: boolean;
};

const Modal: React.FC<ModalProps> = ({
  isOpened,
  setIsOpened,
  children,
  title,
  closable = true,
}) => {
  return (
    <>
      <div
        className={`modal-overlay fixed inset-0 top-0 w-[100vw] h-[100vh] z-index-2 place-content-center dark:bg-black/10 overflow-auto`}
        style={{
          display: isOpened ? "flex" : "none",
        }}
        onClick={() => {
          if (closable) {
            setIsOpened(false);
          }
        }}
      >
        <div
          className="border border-lighterGreen w-10/12 lg:w-8/12 h-auto m-auto p-10 md:p-15 rounded-lg z-index-2 bg-white/90 dark:bg-dark3 dark:shadow-xl dark:shadow-black/25"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex justify-between mb-4">
            <h2 className="text-lighterGreen text-bold text-lg">{title}</h2>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
