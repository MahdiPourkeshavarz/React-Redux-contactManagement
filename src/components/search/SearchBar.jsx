/* eslint-disable react/prop-types */
import { useDebouncedCallback } from "use-debounce";
import { useFetchContactsQuery } from "../../store/contactSlice";
import { useSearchParams } from "react-router-dom";
import { generateQueryParams } from "../../services/queryGenerator";

export function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const debounced = useDebouncedCallback((value) => {
    setSearchParams((prev) => {
      if (value) {
        prev.set("fullName_like", value);
      } else {
        prev.delete("fullName_like");
      }
      return prev;
    });
  }, 200);

  useFetchContactsQuery(generateQueryParams(searchParams));

  return (
    <>
      <input
        className="border focus:outline-none h-8 w-80 rounded-2xl text-black text-center w-1/2 focus:border-purple-700"
        type="text"
        value={searchParams.get("fullName_like") ?? ""}
        onChange={(e) => debounced(e.target.value)}
        placeholder="...جستجوی مخاطب"
      />
    </>
  );
}
