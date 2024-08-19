/* eslint-disable react/prop-types */
import { useDebouncedCallback } from "use-debounce";

export function SearchBar({ onSearch }) {
  const debounced = useDebouncedCallback(
    (value) => {
      onSearch(value);
    },

    1000
  );

  return (
    <>
      <input
        className="border focus:outline-none h-8 w-80 rounded-2xl text-black text-center w-1/2 focus:border-purple-700"
        type="text"
        onChange={(e) => debounced(e.target.value)}
        placeholder="...جستجوی مخاطب"
      />
    </>
  );
}
