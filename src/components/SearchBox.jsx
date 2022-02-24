import { HiSearch } from "react-icons/hi";
import { StyledSearch } from "../styles/styles";

export function SearchBox({ inputEvent, buttonEvent }) {
  const searchIcon = <HiSearch/>
  return (
    <StyledSearch htmlFor="search">
      <input onChange={ inputEvent } type="text" id="search" placeholder="Search" />
      <button onClick={ buttonEvent }>
        { searchIcon }
      </button>
    </StyledSearch>
  );
}