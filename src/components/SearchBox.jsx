import { HiSearch } from "react-icons/hi";
import { StyledSearch } from "../styles/styles";

export function SearchBox({ inputEvent }) {
  const searchIcon = <HiSearch/>
  return (
    <StyledSearch htmlFor="search">
      <input onChange={ inputEvent } type="search" id="search" placeholder="Search" />
      { searchIcon }
    </StyledSearch>
  );
}