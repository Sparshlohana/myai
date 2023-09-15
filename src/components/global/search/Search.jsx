import { SearchIcon } from "../icons/Icons"

const Search = () => {
    return (
        <div className="relative">
            <SearchIcon className="absolute top-2.5 left-7 top fill-[#8495AF] cursor-pointer" />  <input type="text" className="bg-[#620a08] outline-none border-none w-full px-2 pl-[75px] pr-3 py-2 text-white rounded" placeholder="Search and start new chat" />
        </div>
    )
}

export default Search
