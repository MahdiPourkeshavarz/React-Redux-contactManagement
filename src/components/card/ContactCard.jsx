/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import { DeleteModal } from "../modal/DeleteModal";
import { useState } from "react";

export function ContactCard({ contact, onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete(contact);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex space-x-4 bg-slate-500 w-[600px] mx-auto items-center px-4 py-2 rounded-md justify-center">
        <div className="actions flex flex-col space-y-1 cursor-pointer">
          <NavLink
            to={`/contacts/${contact.id}`}
            className="bg-yellow-600 px-1 rounded-lg"
          >
            <img src="/eye.png" alt="_" />
          </NavLink>
          <NavLink
            to={`/contacts/edit/${contact.id}`}
            className="bg-blue-600 px-1 rounded-lg"
          >
            <img src="/edit.png" alt="_" />
          </NavLink>
          <div
            className="bg-red-600 px-1 rounded-lg py-1"
            onClick={handleDeleteClick}
          >
            <img src="/delete.png" alt="_" />
          </div>
        </div>
        <div className="info bg-slate-300 rounded-md px-2 py-4 w-[290px]">
          <div className="flex border-b justify-between border-slate-400 ">
            <p>{contact.fullName}</p>
            <p>: نام و نام خوانوادگی</p>
          </div>
          <div className="flex justify-between">
            <p>{contact.mobileNumber}</p>
            <p>: شماره موبایل</p>
          </div>
          <div className="flex border-t border-slate-400 justify-between">
            <p>{contact.emailAddress}</p>
            <p>: آدرس ایمیل</p>
          </div>
        </div>
        <div>
          <img className="w-48 h-auto rounded-xl" src="/img.jpg" alt="_" />
        </div>
      </div>
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        contactName={contact.fullName}
      />
    </>
  );
}
