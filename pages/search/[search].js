import { Breadcrumbs, Cards, Loading, Navbar, Search } from "../../components"
import Head from "next/Head"
import { useUiContext } from "../../context/ui_context"
import axios from "axios"

const SearchPage = ({data}) => {
    const {status, openSidebar} = useUiContext()
    const {loading} = status

    return (
        <>
           <Head>
                <title>News Report - Searching News</title>
            </Head> 
            <section className="w-full md:w-[80%] mx-auto flex flex-col h-fit min-h-[100vh]">
                <Navbar />
                {openSidebar ? <Sidebar /> : null}
                {loading ? <Loading /> : (
                    <>
                        <main className="pt-[10%]">
                            <Breadcrumbs path='Search' />
                        </main>
                        <Search />
                        <Cards data={data} />
                    </>
                )}
            </section>
        </>
    )
}

export default SearchPage

export const getServerSideProps = async({params}) => {
    const baseURL = process.env.NODE_ENV === 'production' ? 'https://project-news-api.herokuapp.com/api/v1/news' : 'http://localhost:3001/api/v1/news'
    const response = await axios.get(`${baseURL}/search/news?query=${params.search}`)
    return {
        props: {
            data: response.data
        }
    }
}