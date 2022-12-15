import {Cards, Navbar, Loading, Sidebar, Search} from '../components'
import Head from 'next/Head'
import { useUiContext } from '../context/ui_context'
import axios from 'axios'

export const getServerSideProps = async() => {
  const baseURL = process.env.NODE_ENV === 'production' ? 'https://project-news-api.herokuapp.com/api/v1/news' : 'http://localhost:3001/api/v1/news'
  const response = await axios.get(`${baseURL}`)
  return {
    props: {
      allNews: response.data
    }
  }
}

const Home = ({allNews}) => {

  const {status, openSidebar} = useUiContext()

  return (
    <>
      <Head>
        <title>News Report - Updated News Around The World</title>
      </Head>
    
      {openSidebar ? <Sidebar /> : null}

      <section className="flex flex-col w-full md:w-[80%] mx-auto h-fit min-h-[100vh]">
        <Navbar />

        <Search />
        {status.loading ? <Loading /> : <Cards data={allNews}/>}

      </section>
    </>
  )
}

export default Home