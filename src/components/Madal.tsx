import { MouseEventHandler, useEffect } from "react";

interface ModalProps {
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onClose }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e: { code: string }) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleClickBackdrop: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleClickBackdrop}>
      <div></div>
    </div>
  );
};
