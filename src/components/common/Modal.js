import { FaTimes } from "react-icons/fa";
import { MotionSection } from "../MotionDiv";
const Modal = ({ children, showModal, setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };
  return (
    <MotionSection
      initial={{ opacity: 0 }}
      animate={
        showModal ? { display: "flex", opacity: 1 } : { opcaity: 0, scale: 0 }
      }
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 left-0 bottom-0
                         bg-primary text-white w-full flex flex-col items-center pt-10 2xl:pt-20 z-50 overflow-y-hidden"
    >
      <div className="modal max-w-[1000px] " >
        <div className="flex justify-end pr-4 pt-2">
          <button
            onClick={handleClick}
            className="w-10 h-10 fixed z-50 rounded-lg border flex justify-center items-center ml-3 hover:rounded-full cursor-pointer bg-[rgba(65,47,123,0.15)]"
          >
            <FaTimes />
          </button>
        </div>
        {children}
      </div>
    </MotionSection>
  );
};

export default Modal;
