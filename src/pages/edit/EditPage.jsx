import { useParams } from "react-router-dom";
import { ContactForm } from "../../components/form/ContactForm";
import { useFetchContactQuery } from "../../store/contactSlice";

export function EditPage() {
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
      <div className="flex justify-center items-center py-28 space-x-4">
        <img className="w-96 h-auto" src={contact.imgUrl} alt="_" />
        <ContactForm key={contact?.id} contactforUpdate={contact} />
      </div>
    </>
  );
}
