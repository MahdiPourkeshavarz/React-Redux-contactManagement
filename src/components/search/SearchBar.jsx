/* eslint-disable react/prop-types */
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../store/searchSlice";

export function SearchBar() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const debounced = useDebouncedCallback((value) => {
    setSearchParams((prev) => {
      if (value) {
        prev.set("fullName_like", value);
      } else {
        prev.delete("fullName_like");
      }
      dispatch(setSearchQuery(value));
      return prev;
    });
  }, 200);

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
