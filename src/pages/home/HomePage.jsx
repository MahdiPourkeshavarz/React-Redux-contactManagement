import { ContactList } from "../../components/list/ContactList";

import { NavLink } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <NavLink
        to="/contacts/create"
        className="bg-purple-600 text-black py-2 px-1 flex items-center w-max flex-row-reverse absolute right-8 top-20 rounded-lg text-lg font-medium cursor-pointer"
      >
        ساخت مخاطب جدید
        <img className="pr-2" src="/plus.png" />
      </NavLink>
      <ContactList />
    </>
  );
}
