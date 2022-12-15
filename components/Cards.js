import {Card} from '../components'

const Cards = ({data=[]}) => {

  return (
    <section className="w-full pt-[10%]">
        <div className='flex flex-wrap flex-col md:flex-row justify-evenly gap-x-4 gap-y-3 items-stretch'>
            { typeof data.articles !== 'undefined' ?  data.articles.map((item, index) => {
                return <Card {...item} data={item} key={index}/>
            }) : null}
        </div>
    </section>
  )
}

export default Cards