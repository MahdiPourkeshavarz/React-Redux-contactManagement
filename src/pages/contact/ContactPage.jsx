import { useParams } from "react-router-dom";
import { useFetchContactQuery } from "../../store/contactSlice";
import { ContactItem } from "../../components/item/ContactItem";
export function ContactPage() {
  const { contactId } = useParams();
  const {
    data: contact,
    isLoading,
    isError,
    error,
  } = useFetchContactQuery(contactId);

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (isError) return <div className="text-red-500">{error}</div>;

  return (
    <>
      <ContactItem key={contact.id} contact={contact} />
    </>
  );
}
