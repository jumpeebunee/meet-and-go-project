import { FC } from "react"

interface SearchBtnProps {
  isSearchActive: boolean;
  setSearchActive: (value: boolean) => void;
}

const SearchBtn:FC<SearchBtnProps> = ({isSearchActive, setSearchActive}) => {
  return (
    <button 
      onClick={() => setSearchActive(!isSearchActive)}
      className={isSearchActive ? 'search-btn search-btn_active' : 'search-btn'}
    >
      <span></span>
    </button>
  )
}

export default SearchBtn