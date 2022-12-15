import {Breadcrumbs, Navbar, Cards, Loading, Search} from '../../components'
import { useUiContext } from '../../context/ui_context'
import Head from 'next/Head'
import axios from 'axios'

export const getServerSideProps = async({params}) => {
    const baseURL = process.env.NODE_ENV === 'production' ? 'https://project-news-api.herokuapp.com/api/v1/news' : 'http://localhost:3001/api/v1/news'
    const {category} = params
    const categoryNews = await axios.get(`${baseURL}/${category}`)
    return {
        props: {
            data: categoryNews.data
        }
    }
}

const Category = ({data}) => {

    const {status, activeCategories} = useUiContext()
    const {loading} = status
    const newText = (activeCategories.name.slice(0,1)).toUpperCase() + activeCategories.name.slice(1, activeCategories.name.length)

    return (
        <>
            <Head>
                <title>News Report - {newText} Category</title>
            </Head>
            <section className='w-full md:w-[80%] mx-auto flex flex-col h-fit min-h-[100vh]'>
                <Navbar />

                {loading ? <Loading /> : (
                    <>
                        <main className='pt-[10%]'>
                            <Breadcrumbs path={`Category / ${newText}`} />
                        </main>

                        <Search />

                        <main className=''>
                            <Cards data={data}/>
                        </main>
                    </>)}
            </section>
        </>
    )
}

export default Category