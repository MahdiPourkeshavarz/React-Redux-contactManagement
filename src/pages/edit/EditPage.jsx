import { useLoaderData } from "react-router-dom";
import { BASE_URL, CONTACTS_URL } from "../../constants/url";
import { ContactForm } from "../../components/form/ContactForm";
import axios from "axios";

export function EditPage() {
  const contact = useLoaderData();

  return (
    <>
      <div className="flex justify-center items-center py-28 space-x-4">
        <img className="w-96 h-auto" src="/img.jpg" alt="_" />
        <ContactForm key={contact?.id} contactforUpdate={contact} />
      </div>
    </>
  );
}

export async function loader({ params }) {
  const id = params.contactId;
  console.log(id);
  const response = await axios.get(`${BASE_URL}${CONTACTS_URL}/${id}`);
  return response.data;
}
