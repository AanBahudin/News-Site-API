import {GrClose} from 'react-icons/gr'
import { useUiContext } from '../context/ui_context'
import {category} from '../utils/helper'
import Link from 'next/link'

const Sidebar = () => {

    const {openSidebar, handleShowSidebar, handleCategory} = useUiContext()

    return (
        <>
            <section className={`w-[30vw] h-[100%] absolute z-10 right-0 bg-blue border-l-2 border-slate-500 `}>
                <main className="flex justify-between py-10 px-4 font-poppins">
                    <h2 className='text-2xl font-semibold text-white'>News Category</h2>
                    <span className='my-auto' onClick={() => handleShowSidebar(!openSidebar)}> <GrClose className='stroke-white' size={25} /> </span>
                </main>

                <main className='w-full pt-[10%]'>
                    <div className='flex flex-col flex-wrap justify-center gap-y-10 md:w-[90%] mx-auto'>

                        {category.map((item, index) => {
                            return (
                                <article key={index}>
                                    <Link href={`category/${item.title}`}>
                                        <h2 onClick={() => {
                                        handleCategory(index, true, item.title)
                                    }} className={`text-md md:text-xl font-poppins duration-200 hover:text-black/80 font-semibold text-slate-200 uppercase cursor-default`}>{item.title}</h2>
                                    </Link>
                                </article>
                            )
                        })}
                    </div>
                </main>
            </section>
        </>
    )
}

export default Sidebar