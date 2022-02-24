import { HiSearch } from "react-icons/hi";

export function SearchBox({ inputEvent, buttonEvent }) {
  const searchIcon = <HiSearch/>
  return (
    <label htmlFor="search">
      <input onChange={ inputEvent } type="text" id="search" placeholder="Search" />
      <button onClick={ buttonEvent }>
        { searchIcon }
      </button>
    </label>
  );
}