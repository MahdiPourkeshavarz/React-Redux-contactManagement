import { BASE_URL, CONTACTS_URL } from "../constants/url";

export const generateQueryParams = (searchParams) => {
  const name = searchParams.get("name");
  const url = new URL(`${BASE_URL}/${CONTACTS_URL}`);
  if (name) {
    url.searchParams.set("fullName_like", name);
  }
  return url.search;
};
