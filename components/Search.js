import { useNewsContext } from "../context/news_context"
import { useUiContext } from "../context/ui_context"
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai"


const Search = () => {

    const {query, handleSearch} = useUiContext()
    const {searchNews} = useNewsContext()

    return (
        <main className="flex border-slate-500 drop-shadow items-center border-2 w-[90%] lg:w-[60%] mt-[10%] mx-auto bg-white p-1 justify-around rounded">
            <input onKeyPress={(e) => {e.key === 'Enter' ? searchNews() : null}} value={query} onChange={e => handleSearch(e.target.value)} className='rounded px-2 py-1 md:px-4 md:py-2 outline-none text-sm w-full focus:placeholder:text-transparent' placeholder='Search ...' />

            <div className='flex'>
                <button onClick={() => handleSearch('')} className="px-2"><AiOutlineClose size={20} className="my-auto fill-slate-500 hover:fill-slate-700 duration-200" /></button>        
                <button onClick={searchNews} className="border-l-[1px] px-2 border-slate-400"><AiOutlineSearch size={20} className="my-auto fill-slate-500 hover:fill-slate-700 duration-200" /></button>
            </div>
        </main>
    )
}

export default Search