import { useState } from "react";

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchTermHistory, setSearchTermHistory] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term); // updates in real time as user types
  };
  const handleBackspace = () => {
    if (searchTerm === "" && searchTermHistory.length > 1) {
      const previousTerm = searchTermHistory[searchTermHistory.length - 2];
      if (previousTerm) {
        setSearchTerm(previousTerm);
        setSearchTermHistory((prevHistory: string[]) =>
          prevHistory.slice(0, -1)
        );
        onSearch(previousTerm); // here I update search when a character is deleted.
      }
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            handleBackspace();
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
