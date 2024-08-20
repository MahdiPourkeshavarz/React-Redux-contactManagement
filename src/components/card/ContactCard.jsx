/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

export function ContactCard({ contact }) {
  return (
    <>
      <div className="flex space-x-4 bg-slate-500 w-[600px] mx-auto items-center px-4 py-2 rounded-md justify-center">
        <div className="actions flex flex-col space-y-1 cursor-pointer">
          <NavLink
            to={`/contact/${contact.id}`}
            className="bg-yellow-600 px-1 rounded-lg"
          >
            <img src="../../public/eye.png" alt="_" />
          </NavLink>
          <NavLink
            to={`/contact/edit/${contact.id}`}
            className="bg-blue-600 px-1 rounded-lg"
          >
            <img src="../../public/edit.png" alt="_" />
          </NavLink>
          <div className="bg-red-600 px-1 rounded-lg py-1">
            <img src="../../public/delete.png" alt="_" />
          </div>
        </div>
        <div className="info bg-slate-300 rounded-md px-2 py-4">
          <div className="flex border-b border-slate-400 text-right space-x-2">
            <p>{contact.fullName}</p>
            <p>: نام و نام خوانوادگی</p>
          </div>
          <div className="flex  space-x-2">
            <p>{contact.mobileNumber}</p>
            <p>: شماره موبایل</p>
          </div>
          <div className="flex border-t border-slate-400 text-right  space-x-2">
            <p>{contact.emailAddress}</p>
            <p>: آدرس ایمیل</p>
          </div>
        </div>
        <div>
          <img
            className="w-48 h-auto rounded-xl"
            src="../../public/img.jpg"
            alt="_"
          />
        </div>
      </div>
    </>
  );
}
