import { NavLink } from "react-router-dom";
import { httpRequest } from "../../lib/axios.config";
import { CONTACTS_URL } from "../../constants/url";
import { useState } from "react";

export function ContactList() {
  const [contacts, setContacts] = useState([]);

  async function fetchData() {
    const response = await httpRequest.get(CONTACTS_URL);
    setContacts(response.data);
  }

  fetchData();

  return (
    <>
      <NavLink className="bg-purple-600 text-black">ساخت مخاطب جدید</NavLink>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 justify-center">
        {contacts?.map((contact) => (
          <>
            <div className="flex space-x-4 bg-slate-200 opacity-25 w-max justify-center items-center px-4 py-2">
              <div className="actions flex flex-col space-y-2">
                <div>eye</div>
                <div>ed</div>
                <div>del</div>
              </div>
              <div className="info">
                <div>
                  <p>{contact.fullName}</p>
                  <p>نام و نام خوانوادگی:</p>
                </div>
                <div>
                  <p>{contact.mobileNumber}</p>
                  <p>شماره موبایل:</p>
                </div>
                <div>
                  <p>{contact.emailAddress}</p>
                  <p>آدرس ایمیل:</p>
                </div>
              </div>
              <div>
                <img
                  className="w-48 h-auto"
                  src="../../public/img.jpg"
                  alt="_"
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
