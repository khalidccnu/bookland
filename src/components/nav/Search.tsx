import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="join">
      <input
        type="text"
        placeholder="Search books here"
        name="search"
        className={`join-item input input-sm bg-[#1f1b66] text-white rounded-l focus:outline-0`}
      />
      <span className="join-item inline-flex items-center input input-sm bg-[#1f1b66] text-jacarta rounded-r">
        <FaSearch />
      </span>
    </div>
  );
};

export default Search;
