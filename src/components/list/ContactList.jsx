import { ContactCard } from "../card/ContactCard";
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from "../../store/contactSlice";

import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

export function ContactList() {
  const query = useSelector((state) => state.search.query);
  const {
    data: contacts,
    isLoading,
    isError,
    error,
  } = useFetchContactsQuery(query);
  const [deleteContact] = useDeleteContactMutation();

  function handleDeleteContact(contact) {
    deleteContact(contact.id);
    toast.success(`با موفقیت حذف شد!${contact.fullName}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 pt-28 justify-center mb-40">
        {isLoading && <div>is Loading...</div>}
        {contacts?.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDelete={handleDeleteContact}
          />
        ))}
        {isError && <div>{error}</div>}
        <ToastContainer />
      </div>
    </>
  );
}
