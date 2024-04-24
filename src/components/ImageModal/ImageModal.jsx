import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { useEffect } from "react";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClick, imageUrl }) {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);
  console.log(imageUrl);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClick}
        shouldCloseOnOverlayClick={true}
        contentLabel="Example Modal"
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <img className={css.img} src={imageUrl}></img>
      </Modal>
    </div>
  );
}
