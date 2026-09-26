import { createPortal } from "react-dom";
import { useRef, useEffect, ReactNode } from "react";
import "./Modal.css";

interface ModalProps {
  children: ReactNode;
  open: boolean;
}

export default function Modal({ children, open }: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialog.current) return;

    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  const modalRoot = document.getElementById("modal");

  if (!modalRoot) {
    throw new Error("Не найден #modal в index.html");
  }

  return createPortal(<dialog ref={dialog}>{children}</dialog>, modalRoot);
}
