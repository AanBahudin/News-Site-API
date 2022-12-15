import moment from 'moment'
import Link from 'next/link'
import { useNewsContext } from '../context/news_context'
import { useUiContext } from '../context/ui_context'
import defaultImage from '../images/default.png'

const Card = ({data, description, title, publishedAt, urlToImage, source}) => {

  const {getSingleNews} = useNewsContext()
  const {handleShowSidebar} = useUiContext()

  return (
    <section className="p-10 max-w-full md:max-w-[45%] rounded font-poppins">
        <div>
            <article>
                <img className='object-fill' src={urlToImage || defaultImage} />
            </article>
            <p className='text-sm text-slate-600'>{moment(publishedAt).startOf('hour').fromNow()} | {source.name}</p>
            <Link href={`/news/${source}`}>
              <h1 onClick={() => {
                handleShowSidebar(false)
                getSingleNews(data)
                }} className='text-blue/80 py-3 font-semibold hover:text-blue duration-200 cursor-pointer text-lg'>{title}</h1>
            </Link>

            <h2 className='text-slate-500 text-justify'>{description}</h2>
        </div>
    </section>
  )
}

export default Card