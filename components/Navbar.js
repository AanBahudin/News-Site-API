import { useUiContext } from "../context/ui_context"
import { useNewsContext } from "../context/news_context"
import Link from "next/link"
import {FiMenu} from 'react-icons/fi'

const Navbar = () => {

  const {openSidebar, handleShowSidebar,} = useUiContext()
  const {searchNews} = useNewsContext()
  return (
    <section className="font-montserrat">
        <div className='bg-blue px-4 py-4 md:px-5 md:py-3 rounded-b flex justify-between items-center'>
            <Link href='/'>
              <h1 className='text-white text-xl md:text-3xl font-semibold tracking-[0.5rem] cursor-pointer uppercase'>News</h1>
            </Link>
            <span>
              <FiMenu onClick={() => handleShowSidebar(!openSidebar)} size={30} className="stroke-slate-200 hover:stroke-slate-500 duration-200 cursor-default" />
            </span> 
        </div>
    </section>
  )
}

export default Navbar