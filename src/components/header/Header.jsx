import { SearchBar } from "../search/SearchBar";

export default function Header() {
  return (
    <>
      <div className="flex bg-black h-14 w-full justify-between items-center">
        <SearchBar />
        <h1 className="dark:text-slate-300 flex items-center">
          <span className="text-purple-800 pr-2">مخاطبین </span>
          وب اپلیکیشن مدیریت
          <img className="w-8" src="contact.png" alt="_" />
        </h1>
      </div>
    </>
  );
}
