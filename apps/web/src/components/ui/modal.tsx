import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";

interface Modal {
  isOpen: boolean;
  setOpen: () => void;
  title?: string | React.ReactNode;
  children?: string | JSX.Element;
}
const Modal = ({ isOpen, setOpen, title, children }: Modal) => {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
