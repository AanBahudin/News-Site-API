import {category} from '../utils/helper'
import { useUiContext } from '../context/ui_context'
import Link from 'next/link'

const Category = () => {

    const {handleCategory} = useUiContext()

    return (
        <section className='w-full pt-[10%]'>
            <div className='flex flex-wrap justify-center gap-x-10 gap-y-5 items-center w-[80%] md:w-[60%] mx-auto'>

                {category.map((item, index) => {
                    return (
                        <article key={index}>
                            <Link href={`category/${item.title}`}>
                                <h2 onClick={() => {
                                handleCategory(index, true, item.title)
                            }} className={`text-md md:text-xl font-poppins duration-200 hover:text-black/80 font-semibold text-slate-500 uppercase cursor-default`}>{item.title}</h2>
                            </Link>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Category