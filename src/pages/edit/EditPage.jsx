import { useParams } from "react-router-dom";

import { useFetchContactQuery } from "../../store/contactSlice";
import { EditContactForm } from "../../components/form/EditContactForm";

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
      {contact && (
        <div className="flex justify-center items-center py-28 space-x-4">
          <img className="w-96 h-auto" src={contact.imgUrl} alt="Contact" />
          <EditContactForm key={contact.id} contactForUpdate={contact} />
        </div>
      )}
    </>
  );
}
