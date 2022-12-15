import { useNewsContext } from "../../context/news_context"
import { Navbar, Loading, Error, Sidebar } from '../../components'
import Head from 'next/head'
import { useUiContext } from "../../context/ui_context"
import moment from 'moment'

const singleNews = () => {
    const {singleNews} = useNewsContext()
    const { status, openSidebar } = useUiContext()
    const {loading, error, codes} = status
    const {author, content = '', description, publishedAt, title, urlToImage} = singleNews

    return (
        <>
            <Head>
                <title>News Report - News</title>
            </Head>
            {openSidebar ? <Sidebar /> : null}
            <section className="w-full md:w-[80%] mx-auto font-poppins">
                <Navbar />
                {loading ? <Loading /> : ( error || codes === 404 ? <Error /> : (
                    <>
                        <div className="flex flex-col">

                            <main className="text-blue py-[10%] w-[80vw]">
                                <h1 className="text-xl text-center md:text-left md:text-2xl w-[80%] font-semibold">{title}</h1>
                                <p className="text-slate-400 text-xl py-7 text-center md:text-left md:py-3">Published At {moment(publishedAt).format('LL')}</p>
                            </main>

                            <main className="flex items-center py-[3%] md:pb-[5%] md:pt-[5%] flex-col relative mx-auto">
                                <img className="object-contain w-[70vw] h-[50vh]" src={urlToImage} alt={title}/>

                                <div className="pt-[2%] w-[65%] text-slate-500 text-center">
                                    <h4 className="italic py-3"> " {description}"</h4>
                                    <p className="text-slate-700 font-semibold">Author - {author}</p>
                                </div>
                            </main>

                            <h5 className="text-md text-justify md:text-left md:text-lg text-slate-600">{`${content}`}</h5>
                        </div>
                    </>
                ))}

            </section>
        </>)}
export default singleNews
