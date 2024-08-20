import { ContactCard } from "../card/ContactCard";
import { useFetchContactsQuery } from "../../store/contactSlice";

export function ContactList() {
  const { data: contacts, isLoading, isError, error } = useFetchContactsQuery();

  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 pt-28 justify-center">
        {isLoading && <div>is Loading...</div>}
        {contacts?.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
        {isError && <div>{error}</div>}
      </div>
    </>
  );
}
