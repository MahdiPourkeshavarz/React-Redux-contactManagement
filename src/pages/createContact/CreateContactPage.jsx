import { ContactForm } from "../../components/form/ContactForm";

export function CreateContactPage() {
  return (
    <>
      <div className="border-b border-slate-500 flex justify-center py-2">
        <p className="text-green-600 font-medium text-xl">ساختن مخاطب جدید</p>
      </div>
      <div className="flex justify-center items-center gap-x-8">
        <div className="">
          <img className="rounded-xl" src="/hero.jpg" alt="_" />
        </div>
        <div>
          <ContactForm contact={{}} />
        </div>
      </div>
    </>
  );
}
