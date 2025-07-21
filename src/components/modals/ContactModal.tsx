import React, { useState } from "react";
import Modal from "../ui/modal";
import { TbCheck } from "react-icons/tb";

interface ContactModal {
  isOpen: boolean;
  onOpenChange: () => void;
}
const ContactModal = ({ isOpen, onOpenChange }: ContactModal) => {
  return (
    <div>
      <Modal isOpen={isOpen} setOpen={onOpenChange} title="Success">
        <>
          <p>
            <TbCheck color="text-secondary" />
            Message Sent!
          </p>
          <button onClick={onOpenChange}>close</button>
        </>
      </Modal>
    </div>
  );
};

export default ContactModal;
